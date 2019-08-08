import fetch from './lib/fetch';

const scrape = async id => {
  const children = await fetchChildren(id);

  const grandChildren = await fetchGrandChildren(children);

  async function fetchChildren(id) {
    const { data } = await fetch.get(
      `/collection/v1/items/${id}/hierarchy-children`
    );

    return data.items.data;
  }

  async function fetchGrandChildren(children) {
    const promises = children.map(async child => {
      return await fetchChildren(child.id);
    });

    const grandChildren = await Promise.all(promises);

    return children.map((child, i) => {
      return {
        ...child,
        children: grandChildren[i],
      };
    });
  }

  return grandChildren;
};

// const fetchTree = async id => {
//   const children = await fetchChildren(id);

//   for (const child of children) {
//     const result = await fetchChildren(child.id);
//   }
// };

export default scrape;
