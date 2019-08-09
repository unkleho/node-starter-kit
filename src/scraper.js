import fetch from './lib/fetch';

const scrape = async (id) => {
  return fetchItem(id);
};

async function fetchItem(id) {
  const {
    data: { item },
  } = await fetch.get(`/collection/v1/items/${id}`);

  const children = await fetchChildren(id);
  const files = await fetchFiles(id);

  if (children.length > 0) {
    const childrenResult = await Promise.all(
      children.map((child) => fetchItem(child.id)),
    );

    return {
      ...item,
      children: childrenResult,
    };
  } else if (files.length) {
    return {
      ...item,
      children: files,
    };
  }

  return item;
}

async function fetchChildren(id) {
  try {
    const { data } = await fetch.get(
      `/collection/v1/items/${id}/hierarchy-children`,
    );

    return data.items.data;
  } catch (error) {
    return null;
  }
}

async function fetchFiles(id) {
  try {
    const { data } = await fetch.get(
      `/collection/v1/items/${id}/hierarchy-files`,
    );

    return data.files.data;
  } catch (error) {
    return null;
  }
}

export default scrape;
