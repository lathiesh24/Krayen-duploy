import { useEffect, useState } from "react";
import { Googlemapsembed } from "../components/Googlemapsembed";
import { Tweetembed } from "../components/Tweetembed";
import { getPage, getBlocks, getDatabase } from "../library/notion";

function pagedatas({ page, pageblock, blockchild }) {
  // console.log("page", page);
  console.log("pageblock", pageblock);
  // console.log("blockchild", blockchild);

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
  // console.log("type", rows);

  console.log("something", definedBlock);
  const datasOfPage = pageblock;
  const items = datasOfPage || [];
  const codeBlocks = items.map((block) => {
    // console.log("bloc", block?.heading_3?.rich_text[0]?.text?.content);
    if (block.type == "callout") {
      return (
        <div
          key={block?.id}
          className="px-4 py-3 mt-5 text-black bg-[#F2F2F2] rounded-md"
        >
          <div>
            {" "}
            <span key={block?.id} className="inline-block mr-2">
              {block?.callout?.icon?.type == "emoji"
                ? block?.callout?.icon?.emoji
                : ""}
            </span>
            {block?.callout?.rich_text[0]?.text?.content}
          </div>
        </div>
      );
    } else if (block.type == "code") {
      return (
        <pre
          className={`p-4 overflow-x-auto mt-5 text-black bg-[#F2F2F2] `}
          key={block.id}
        >
          <div className="flex justify-end">
            {block?.code.language}
          </div>
          <div> {block?.code?.rich_text[0]?.text?.content}</div>
        </pre>
      );

      //Headings
    } else if (block.type == "heading_3") {
      return (
        <div
          key={block?.id}
          className="text-3xl mt-5 font-medium text-gray-800 capitalize"
        >
          {block?.heading_3?.rich_text[0]?.text?.content}
        </div>
      );
    } else if (block.type == "heading_2") {
      return (
        <div
          key={block?.id}
          className="text-4xl mt-4 font-semibold text-gray-800 capitalize "
        >
          {block?.heading_2?.rich_text[0]?.text?.content}
        </div>
      );
    } else if (block.type == "heading_1") {
      return (
        <div
          key={block?.id}
          className="text-6xl mt-5 font-bold leading-tight capitalize "
        >
          {block?.heading_1?.rich_text[0]?.text?.content}
        </div>
      );
    }

    //Paragraph
    else if (block.type == "paragraph") {
      const [colorPara, setColorPara] = useState(
        block?.paragraph?.color == "default" ? "gray" : "black"
      );
      useEffect(() => {
        setColorPara(block?.paragraph?.color);
      }, [block]);

      return (
        <div
          key={block?.id}
          className={`max-w-full mt-5 w-full text-lg white-space-pre-wrap word-break-break-word caret-color-${colorPara}-500 p-3`}
        >
          {block?.paragraph?.rich_text[0]?.text?.content}
        </div>
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
          className={`w-full mt-5 caret-color-${colorQuote}-500 p-3 max-w-full text-lg border-gray-800 white-space-pre-wrap word-break-break-word text-md border-l-4`}
        >
          {block?.quote?.rich_text[0]?.text?.content}
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
          className={`text-${colorToggle}-400 font-medium mt-5 leading-relaxed mb-4 relative`}
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
                  // stroke="currentColor"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2 text-lg font-medium leading-5 text-gray-900">
                {" "}
                {block?.toggle?.rich_text[0]?.text?.content}
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
      // console.log("todo", classNameCheck);
      return (
        <div
          key={block?.id}
          className={`text-${colorToDo}-400 mt-5  ${classNameCheck} leading-relaxed mb-4`}
        >
          <input type="checkbox" checked={block?.to_do?.checked} readOnly={true} />
          <span className=" text-lg ml-2">{block?.to_do?.rich_text[0]?.text?.content}</span>
        </div>
      );
    } else if (block.type == "numbered_list_item") {
      return (
        <li className="list-decimal text-md mt-5">
          {block.numbered_list_item.rich_text[0].text.content}
        </li>
      );
    } else if (block.type == "video" ) {
        return (
            <div>
                {/* <span>{block.video.caption}</span> */}
                <a href={`${block.video.external.url}`}>{block.video.external.url}</a>
            </div>
        )
    } else if (block.type == "image") {
        return (
            <div>
              <img src={`${block.image.file.url}`} alt="" />               
            </div>
        )
    } else if (block.type == "embed"){
      const url = block?.embed?.url
      const spliturl = url.split('/');
      console.log('url',spliturl)
      if(spliturl[2] === 'open.spotify.com'){
        return console.log('spotify')
      } else if(spliturl[2] === 'twitter.com'){
        return <Tweetembed tweet={spliturl}/>
      } else if(spliturl[2] === 'goo.gl'){
        return <Googlemapsembed place={spliturl}/>
      }
    }
      
    else if (block && block.type === "paragraph" && block.paragraph && block.paragraph.rich_text && block.paragraph.rich_text[0] && block.paragraph.rich_text[0].type === "equation" && block.paragraph.rich_text[0].equation) {
    return (
        <div>
            {block.paragraph.rich_text[0].equation.expression}      
        </div>
    );
    }else if (block.type == "bulleted_list_item") {
      return (
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className="text-md">
            {block.bulleted_list_item.rich_text[0].text.content}
            </li>
        </ul>
      );
    // }   else if (block.type === "table") {
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
    }
  });

  return (
    <div className="flex justify-center items-center">
      <div className=" w-[800px]">{codeBlocks}</div>;
    </div>
  )
}

export default pagedatas;

// export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "eb889e735554462ca107e68cd7ace229";

export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

// export const blockid = "2775902b-03c4-4e75-b06d-2f5ae5560761";

export const getStaticProps = async (context) => {
  console.log('context',context)
  const pageId = context.params.id;
  const pageblock = await getBlocks(pageId);
  const pagedata = await getPage(pageId);
  // const child = await getBlocks(blockid);
  //    console.log('dataaaaaa', pageblock);
  //    console.log("0hjh",pagedata);
  return {
    props: {
      page: pagedata,
      pageblock: pageblock,
      // blockchild: child,
    },
    revalidate: 1,
  };
};

