import { useEffect, useState } from "react";
import { getPage,getBlocks, getDatabase } from "../library/notion";

function pagedatas({page,pageblock}) {

    //Color for Paraagraph 

    console.log("page",page)
    console.log("pageblock",pageblock)

    const datasOfPage = pageblock
    const items = datasOfPage || []
    console.log("dataBlock",items)

            const codeBlocks = 
                items.map((block) => {
                console.log("bloc",block?.heading_3?.rich_text[0]?.text?.content)
                  if(block.type == "callout") {
                    return (
                        <div key={block?.id} className="px-4 py-2 text-black bg-yellow-200 rounded-xl" >
                            <div> <span key={block?.id} className="inline-block mr-2">{block?.callout?.icon?.type =="emoji" ? block?.callout?.icon?.emoji : "" }</span> 
                             {block?.callout?.rich_text[0]?.text?.content}</div>
                        </div>
                    )
                } else if( block.type == "code"){
                return (
                    <pre  className={`p-4 overflow-x-auto text-white bg-gray-800 rounded-md`}  key={block.id}>{block?.code?.rich_text[0]?.text?.content}</pre>
                )

    //Headings
                } else if(block.type == "heading_3") {
                    return (
                        <div key={block?.id} className="text-xl font-bold text-gray-800 capitalize" >
                             {block?.heading_3?.rich_text[0]?.text?.content}
                        </div>
                    )
                }else if(block.type == "heading_2") {
                    return (
                        <div key={block?.id} className="text-2xl font-bold text-gray-800 capitalize " >
                             {block?.heading_2?.rich_text[0]?.text?.content}
                        </div>
                    )
                } else if(block.type == "heading_1") {
                    return (
                        <div key={block?.id} className="text-3xl font-bold leading-tight capitalize" >
                             {block?.heading_1?.rich_text[0]?.text?.content}
                        </div>
                    )
                }

    //Paragraph
               else if(block.type == "paragraph") {
                    const [colorPara, setColorPara] = useState(block?.paragraph?.color == "default" ? "gray" : "black")
                    useEffect(()=>{
                        setColorPara(block?.paragraph?.color)
                        },[block])
                    
                    return (
                        <div key={block?.id} className={`max-w-full w-full text-lg white-space-pre-wrap word-break-break-word caret-color-${colorPara}-500 p-3`}>
                             {block?.paragraph?.rich_text[0]?.text?.content}
                        </div>
                    )
                }
                else if(block.type == "quote") {
                    const [colorQuote, setColorQuote] = useState(block?.quote?.color == "default" ? "gray" : "black")
                    useEffect(()=>{
                        setColorQuote(block?.quote?.color)
                        },[block])
                    return (
                        <div key={block?.id} className= {`w-full caret-color-${colorQuote}-500 p-3 max-w-full text-lg border-gray-800 white-space-pre-wrap word-break-break-word text-md border-x-4`}>
                             {block?.quote?.rich_text[0]?.text?.content}
                        </div>
                    )
                }  else if(block.type == "toggle") {
                    const [colorToggle, setColorToggle] = useState(block?.toggle?.color == "default" ? "gray" : "black")
                    useEffect(()=>{
                        setColorToggle(block?.toggle?.color)
                        },[block])
                    return (
                        <div key={block?.id} className= {`text-${colorToggle}-400 font-medium leading-relaxed mb-4`}>
                             {block?.toggle?.rich_text[0]?.text?.content}
                        </div>
                    )
                } else if(block.type == "to_do") {
                    const [colorToDo, setColorToDo] = useState(block?.to_do?.color == "default" ? "gray" : "black")
                    useEffect(()=>{
                        setColorToDo(block?.to_do?.color)
                        },[block])
                    const classNameCheck = block?.to_do?.checked == true ? "line-through" : '';
                        console.log("todo",classNameCheck)
                    return (
                        <div key={block?.id} className= {`text-${colorToDo}-400 font-medium  ${classNameCheck} leading-relaxed mb-4`}>
                             <input type="checkbox" checked={block?.to_do?.checked} />
                             {block?.to_do?.rich_text[0]?.text?.content}
                             
                        </div>
                       
                    )
                } else if (block.type === "numbered_list_item") {
                    return (
                        <li className="list-decimal text-md">
                            {block.numbered_list_item.rich_text[0].text.content}
                        </li>
                    )
                }

            })
        

 const datasss = [
    {
"object": "block",
"id": "4ddfd00a-7545-4f47-abfd-6b7d372cb6d6",
"parent": {
"type": "page_id",
"page_id": "4606f5e4-00c3-4d68-b8a0-353328ad0c3c"
},
"created_time": "2022-11-30T17:09:00.000Z",
"last_edited_time": "2022-11-30T17:10:00.000Z",
"created_by": {
"object": "user",
"id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
},
"last_edited_by": {
"object": "user",
"id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
},
"has_children": false,
"archived": false,
"type": "code",
"code": {
"caption": [],
"rich_text": [
{
"type": "text",
"text": {
"content": "console.log('hello')",
"link": null
},
"annotations": {
"bold": false,
"italic": false,
"strikethrough": false,
"underline": false,
"code": false,
"color": "default"
},
"plain_text": "console.log('hello')",
"href": null
}
],
"language": "javascript"
}
},
{
    "object": "block",
    "id": "2dd4c9dc-69c2-412f-b07e-54ca63ca8644",
    "parent": {
        "type": "page_id",
        "page_id": "4606f5e4-00c3-4d68-b8a0-353328ad0c3c"
    },
    "created_time": "2022-11-29T18:18:00.000Z",
    "last_edited_time": "2022-11-29T20:12:00.000Z",
    "created_by": {
        "object": "user",
        "id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
    },
    "last_edited_by": {
        "object": "user",
        "id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
    },
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
        "rich_text": [
            {
                "type": "text",
                "text": {
                    "content": "breathe",
                    "link": null
                },
                "annotations": {
                    "bold": true,
                    "italic": true,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                },
                "plain_text": "breathe",
                "href": null
            }
        ],
        "checked": true,
        "color": "default"
    }
},
{
    "object": "block",
    "id": "9387d803-be5d-414e-9a81-582a02792c92",
    "parent": {
        "type": "page_id",
        "page_id": "4606f5e4-00c3-4d68-b8a0-353328ad0c3c"
    },
    "created_time": "2022-11-26T14:10:00.000Z",
    "last_edited_time": "2022-11-30T17:23:00.000Z",
    "created_by": {
        "object": "user",
        "id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
    },
    "last_edited_by": {
        "object": "user",
        "id": "1dd873c4-fd6f-4b39-a06a-c79674e130f3"
    },
    "has_children": false,
    "archived": false,
    "type": "code",
    "code": {
        "caption": [],
        "rich_text": [
            {
                "type": "text",
                "text": {
                    "content": "print('Hello world')",
                    "link": null
                },
                "annotations": {
                    "bold": false,
                    "italic": false,
                    "strikethrough": false,
                    "underline": false,
                    "code": false,
                    "color": "default"
                },
                "plain_text": "print('Hello world')",
                "href": null
            }
        ],
        "language": "python"
    }
}]





  return (
   <div>
   {codeBlocks}
    </div>
  )
}

export default pagedatas


export const databaseId = '4c699e3e758d41248751780fefed7d23';
export const pageId='4606f5e400c34d68b8a0353328ad0c3c'
                    
export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  }
}




export const getStaticProps = async () => {
   const pageblock = await getBlocks(pageId);
   const pagedata = await getPage(pageId);
   console.log('dataaaaaa', pageblock);
   console.log("0hjh",pagedata);
  return {
    props: {
      page:pagedata,
      pageblock:pageblock
    },
    revalidate: 1,
  };
};