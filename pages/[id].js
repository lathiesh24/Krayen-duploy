import { getPage,getBlocks, getDatabase } from "../library/notion";

function pagedatas({page,pageblock}) {
  console.log("page-->",page,"pageblozk",pageblock)
   

  const datasOfPage = pageblock
  const items = datasOfPage || []
  console.log("first",items)
  const datasOfPageblock = items.map((item) => {
    return (item?.type)
  })
  console.log("datasOfPageblock",datasOfPageblock)


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
      {datasss.map(item => (
        <div key={item.id}>
          {item.type === 'rich_text' && (  
            <div>{item.rich_text[0].text.content}</div>
          )}
          {item.type === 'to_do' && (
            <div>{item.to_do.rich_text[0].text.content}</div>
          )}
             {item.type === 'code' && (
            <pre>
              <code>{item.code.rich_text[0].text.content}</code>
            </pre>
          )}
        </div>
      ))}
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