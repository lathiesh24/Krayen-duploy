// import { getDatabase } from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { getBlocks, getDatabase, getPage } from "../library/notion";


// export const databaseId = '4c699e3e758d41248751780fefed7d23';
// export const pageId='4606f5e400c34d68b8a0353328ad0c3c'

export const databaseId = 'e649f6c751994c0ea85ac6cd6495e7f4'; 
export const pageId='eb889e735554462ca107e68cd7ace229';

export const Text = ({ text }) => {
  console.log("text", text);
  if (!text) {
    return null;
  }
  return text.map((value) => {
    console.log('value',value)
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
    } = value;
    // console.log('text',text)
    return (
      <span
        className={[
          bold ?  'font-bold': "",
          code ? ' bg-[#F2F2F2] px-2 py-4 rounded-lg' : "",
          italic ? ' italic' : "",
          strikethrough ? ' line-through' : "",
          underline ? 'underline' : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {value.text.content}
        {/* {text.content } */}
        {/* {text.link == null ? text.content : <a href={text.link.url}>{text.content}</a> } */}
      </span>
    );
  });
};
function index({posts}) {
console.log('posts',posts)
  
  return (
    <div className="flex flex-col justify-center w-4/5 pt-20 pb-40 pl-96">
        <h2 className='mb-[70px]'>All Posts</h2>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className='flex flex-col min-h-[150px]  md:max-w-xl rounded-lg bg-white shadow-lg mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl duration-300 cursor-pointer p-5'>
                <h3 className='p-3 '>
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>
                 {/* <p className="w-[400px] h-[150px]">{}</p> */}
                 <div className="w-[350px] h-[130px] p-3">
                  <Text text={post.properties.Text.rich_text}/>
                 </div>
                <p className='p-3 '>{date}</p>
                <div className="pl-3">
                <Link className="" href={`/${post.id}`}>Read post →</Link>
                </div>
              </li>
            );
          })}
       
  
    </div>
  )
}

export default index;


export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
   //const database =await getBlocks(pageId);
   console.log('dataaaaaa', database);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};