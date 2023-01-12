// import { getDatabase } from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";
import Link from "next/link";
import React, { Fragment } from "react";
import { getBlocks, getDatabase, getPage } from "../library/notion";

// export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";

export const databaseId = '4c699e3e758d41248751780fefed7d23';
export const pageId='4606f5e400c34d68b8a0353328ad0c3c'

// export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "eb889e735554462ca107e68cd7ace229";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    console.log("value", value);
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
    } = value;
    // console.log('text',text)
    return (
      <span
        className={[
          bold ? "font-bold" : "",
          code ? " bg-[#F2F2F2] px-2 py-4 rounded-lg" : "",
          italic ? " italic" : "",
          strikethrough ? " line-through" : "",
          underline ? "underline" : "",
        ].join(" line-clamp-3")}
        style={color !== "default" ? { color } : {}}
      >
        {value.text.content}
        {/* {text.content } */}
        {/* {text.link == null ? text.content : <a href={text.link.url}>{text.content}</a> } */}
      </span>
    );
  });
};
function index({ posts }) {
  console.log("posts", posts);

  return (
    <div
      className="flex flex-col max-w-screen-2xl min-h-screen items-center
     justify-center"
    >
      <h2 className="mb-[70px]">All Posts</h2>
      {posts.map((post) => {
        const date = new Date(post.last_edited_time).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
        return (
          <li
            key={post.id}
            className="flex flex-col max-w-[750px] rounded-lg bg-white shadow-lg mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-2xl duration-300 cursor-pointer p-5"
          >
            <Link className="" href={`/${post.id}`}>
              <div className="flex max-h-[210px]">
                <div className="bg-gray-600 md:w-[280px] rounded-md">
                  <img
                    src={post?.cover?.external?.url}
                    alt=""
                    className="min-w-[280px] min-h-[210px] max-w-[280px] max-h-[210px] object-cover rounded-2xl"
                  />
                </div>
                <div className="ml-3">
                  <h3 className=" font-bold pl-2">
                    <Text text={post.properties.Name.title} />
                  </h3>
                  <div className="  flex-grow h-[90px] p-3 ">
                    <Text text={post.properties.Text.rich_text} />
                  </div>
                  <div className="">
                    {Object.values(post.properties).map((property) => {
                      if (property?.type == "multi_select") {
                        const multidata = property?.multi_select?.map(
                          (values) => {
                            console.log("values", values);
                            return (
                              <div className="cursor-pointer m-2 pl-2 pr-2 pb-1 min-w-[50px]  bg-[#89cff0] rounded-sm">
                                {values?.name}
                              </div>
                            );
                          }
                        );
                        return <div className="flex">{multidata}</div>;
                      }
                    })}
                  </div>
                  <p className="p-3 ">{date}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default index;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  //const database =await getBlocks(pageId);
  console.log("dataaaaaa", database);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
