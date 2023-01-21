import { useEffect, useState } from "react";
import { getPage, getBlocks, getDatabase } from "../library/notion";

function pagedatas({ page, pageblock, blockchild }) {
  console.log("page", page);
  console.log("pageblock", pageblock);
  console.log("blockchild", blockchild);

  const datasOFBlock = blockchild;
  const definedBlock = datasOFBlock || [];

  const something = definedBlock.map((child) => {
    return child.type === "table_row"
      ? child?.table_row?.cells.map((item) => item[0]?.text.content)
      : "";
  });
  const rows = something.map((row) => {
    return row.map((cell) => cell);
  });
  console.log("type", rows);

  console.log("something", definedBlock);
  const datasOfPage = pageblock;
  const items = datasOfPage || [];
  const codeBlocks = items.map((block) => {
    console.log("bloc",block?.heading_3?.rich_text.map((item) => item?.text?.content));
    if (block.type == "callout") {
      return (
        <div
          key={block?.id}
          className="px-4 py-2 text-black bg-yellow-200 rounded-xl"
        >
          <div>
            {" "}
            <span key={block?.id} className="inline-block mr-2">
              {block?.callout?.icon?.type == "emoji"
                ? block?.callout?.icon?.emoji
                : ""}
            </span>
            {block?.callout?.rich_text.map((item) => item?.text?.content)}
          </div>
        </div>
      );
    } else if (block.type == "code") {
      return (
        <pre
          className={`p-4 overflow-x-auto text-white bg-gray-800 rounded-md`}
          key={block.id}
        >
          {block?.code?.rich_text.map((item) => item?.text?.content)}
        </pre>
      );
    } else if (block.type == "heading_3") {
      return (
        <div
          key={block?.id}
          className="mt-5 text-3xl font-medium text-gray-800 capitalize"
        >
          {block?.heading_3?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_2") {
      return (
        <div
          key={block?.id}
          className="text-2xl font-bold text-gray-800 capitalize "
        >
          {block?.heading_2?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "heading_1") {
      return (
        <div
          key={block?.id}
          className="text-3xl font-bold leading-tight capitalize"
        >
          {block?.heading_1?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "paragraph") {
      const [colorPara, setColorPara] = useState(
        block?.paragraph?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorPara(block?.paragraph?.color);
      }, [block]);
      return (
        <div>{block?.quote?.rich_text.map((item) => item?.text?.content)}</div>
      );
    } else if (block.type == "quote") {
      const [colorQuote, setColorQuote] = useState(
        block?.quote?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorQuote(block?.quote?.color);
      }, [block]);
      return (
        <div
          key={block?.id}
          className={`w-full caret-color-${colorQuote}-500 p-3 max-w-full text-lg border-gray-800 white-space-pre-wrap word-break-break-word text-md border-x-4`}
        >
          {block?.quote?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type == "toggle") {
      const [colorToggle, setColorToggle] = useState(
        block?.toggle?.color == "default" ? "gray" : "black"
      );
      const [open, setOpen] = useState(false);

      const handleToggle = () => {
        setOpen(!open);
      };

      return (
        <div
          key={block?.id}
          className={`text-${colorToggle}-400 font-medium leading-relaxed mb-4 relative`}
        >
          <button
            className="focus:outline-none toggle-button"
            onClick={handleToggle}
          >
            <div className="flex items-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L5 9L9 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2 text-lg font-medium leading-5 text-gray-900">
                {" "}
                {block?.toggle?.rich_text.map((item) => item?.text?.content)}
              </span>
            </div>
          </button>
          {/* {block.has_children && (
            <div className={`toggle-content ${open ? "block" : "hidden"}`}>
              {blockchild.map((child) => {
                if (child.type == "paragraph") {
                  return (
                    <p className="text-black">
                      {child?.paragraph?.rich_text[0]?.text?.content}
                    </p>
                  );
                }
              })}
            </div>
          )} */}
        </div>
      );
    } else if (block.type == "to_do") {
      const [colorToDo, setColorToDo] = useState(
        block?.to_do?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorToDo(block?.to_do?.color);
      }, [block]);
      const classNameCheck =
        block?.to_do?.checked == true ? "line-through" : "";
      console.log("todo", classNameCheck);
      return (
        <div
          key={block?.id}
          className={`text-${colorToDo}-400 font-medium  ${classNameCheck} leading-relaxed mb-4`}
        >
          <input type="checkbox" checked={block?.to_do?.checked} />
          {block?.to_do?.rich_text.map((item) => item?.text?.content)}
        </div>
      );
    } else if (block.type === "numbered_list_item") {
      return (
        <li className="list-decimal text-md">
          {block.numbered_list_item.rich_text.map(
            (item) => item?.text?.content
          )}
        </li>
      );
    }
    // else if (block.type === "table") {
    //   return (
    //     <tbody>
    //       {block?.table?.has_row_header &&
    //         something.map((row, i) => (
    //           <tr key={i}>
    //             {row.map((cell, j) => (
    //               <td
    //                 key={j}
    //                 className={`border px-4 py-2 text-green-600 ${
    //                   (j == 0 && block?.table?.has_column_header) ||
    //                   (i == 0 && block?.table?.has_row_header)
    //                     ? "font-bold"
    //                     : ""
    //                 }`}
    //               >
    //                 {cell || ""}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //     </tbody>
    //   );
    // }
  });

  return (
    <div className="flex items-center justify-center">
      <div className=" w-[800px]">{codeBlocks}</div>;
    </div>
  )
}
export default pagedatas;

export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";


export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const pageId = context.params.id;
  const pageblock = await getBlocks(pageId);
  const pagedata = await getPage(pageId);
  let child = [];
  for (let i=0; i<pageblock.length; i++) {
    if (pageblock[i].parent.page_id === pageId && pageblock[i].has_children) {
        child.push(...await getBlocks(pageblock[i].id));
    }
  }

  console.log('child data:', child);

  return {
    props: {
      page: pagedata,
      pageblock: pageblock,
      child: child,
    },
    revalidate: 1,
  };
};


//export const pageId = "eb889e735554462ca107e68cd7ace229";

//export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";
