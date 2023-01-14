import { Client } from "@notionhq/client";

const notion = new Client({
  //auth: "secret_CQ7MuONVL1UL1bPJ4FJoXZv7NCC02g5Menr6aEyMox1",
  // auth: "secret_HarVG4FsHZaDiaTLWwzbxd1c53Pn1PjX04CxzG0lYnV",
  auth: "secret_MnsWLzCz8ReGab2uZoawvLuV3QjQz89DcxIbcMaSPyb"
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log("responsenotlib", response);
  // const page = await notion.page.get(pageId);
  // console.log(page);
  return response;
};

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  console.log('blocksssss',blocks)
  return blocks;
};
