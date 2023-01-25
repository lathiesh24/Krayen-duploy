// import { getDatabase } from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";
import Link from "next/link";
import React, { Fragment } from "react";
import { getBlocks, getDatabase, getPage } from "../library/notion";

//export const databaseId = "4c699e3e758d41248751780fefed7d23";
// export const pageId = "4606f5e400c34d68b8a0353328ad0c3c";

// export const databaseId = 'e649f6c751994c0ea85ac6cd6495e7f4';
// //export const pageId='4606f5e400c34d68b8a0353328ad0c3c'

export const databaseId = "e649f6c751994c0ea85ac6cd6495e7f4";
// export const pageId = "eb889e735554462ca107e68cd7ace229";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    console.log("value", value);

    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    console.log("text", text);
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
        {text?.link == null ? (
          text.content
        ) : (
          <a href={text?.link?.url}>{text?.content}</a>
        )}
      </span>
    );
  });
};

function index({ posts }) {
  console.log("posts", posts);

  //Title
  const title = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const titleProperties = properties
      .filter((property) => property?.type === "title")
      .map((property) => {
        return property?.title?.map((value) => value?.text?.content);
      });
    return (
      <div className="font-sans text-2xl font-bold">{titleProperties}</div>
    );
  });

  const multiSelect = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const multiSelectProperties = properties
      .filter((property) => property?.type === "multi_select")
      ?.map((prop) => {
        return prop?.multi_select?.map((value) => {
          return (
            <div className="cursor-pointer m-2 pl-2 pr-2 pb-1 w-full shadow-lg bg-[#89cff0] rounded-sm">
              {value?.name}
            </div>
          );
        });
      });
    return <div className="flwz">{multiSelectProperties}</div>;
  });

  const Select = posts.map((post) => {
    const properties = Object.values(post.properties);
    const selectProperties = properties
      .filter((property) => property.type === "select")
      .map((prop) => {
        return (
          <div className="cursor-pointer m-2 pl-2 pr-2 pb-1 w-full shadow-lg bg-[#89cff0] rounded-sm">
            {prop?.select?.name}
          </div>
        );
      });
    return <div>{selectProperties}</div>;
  });

  const Texture = posts.map((post) => {
    const properties = Object.values(post.properties);
    const textureProperties = properties
      .filter((property) => property?.type === "rich_text")
      .map((prop) => {
        return prop?.rich_text?.map((item) => {
          return <div>{item?.text?.content}</div>;
        });
      });
    return <div>{textureProperties}</div>;
  });

  const CreatedTime = posts.map((post) => {
    const properties = Object.values(post.properties);
    const createdTimeProperties = properties
      .filter((property) => property.type === "created_time")
      .map((prop) => {
        const date = new Date(prop.created_time);
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      });
    return <div>{createdTimeProperties}</div>;
  });

  const CreatedBy = posts.map((post) => {
    const properties = Object.values(post.properties);
    const createdByProperties = properties
      .filter((property) => property?.type === "created_by")
      .map((prop) => {
        return <div>{prop?.created_by?.name}</div>;
      });
    return <div>{createdByProperties}</div>;
  });

  const LastEditedTime = posts.map((post) => {
    const properties = Object.values(post.properties);
    const lastEditedTimeProperties = properties
      .filter((property) => property?.type === "last_edited_time")
      .map((prop) => {
        const date = new Date(prop?.last_edited_time);
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      });
    return <div>{lastEditedTimeProperties}</div>;
  });

  const LastEditedBy = posts.map((post) => {
    const properties = Object.values(post.properties);
    const lastEditedTimeProperties = properties
      .filter((property) => property.type === "last_edited_by")
      .map((prop) => {
        return <div>{prop.last_edited_by.name}</div>;
      });
    return <div>{lastEditedTimeProperties}</div>;
  });

  const Number = posts.map((post) => {
    const properties = Object.values(post.properties);
    const NumberProperties = properties
      .filter((property) => property.type === "number")
      .map((prop) => {
        return <div>{prop.number}</div>;
      });
    return <div>{NumberProperties}</div>;
  });



const Status = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const StatusProperties = properties.filter(property => property.type === "status").map((prop)=>{
   return <div>{prop.status.name}</div>
  })
  return <div>{StatusProperties}</div>
})

const DateProp = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const DateProperties = properties.filter(property => property.type === "date").map((prop)=>{
    const date = new Date(prop?.date?.start)
   return  (date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }));
      });
    return <div>{DateProperties}</div>;
  });

const Person = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const PersonProperties = properties.filter(property => property.type === "people").map((prop)=>{
   return (prop.people.map((item)=>{
    return item.name
   }))
  })
  return <div>{PersonProperties}</div>
})

const Phone = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const PhoneProperties = properties.filter(property => property.type === "phone_number").map((prop)=>{
   return prop.phone_number
  })
  return <div>{PhoneProperties}</div>
})

const Email = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const EmailProperties = properties.filter(property => property.type === "email").map((prop)=>{
  return prop.email
  })
  return <div>{EmailProperties}</div>
})

const Checkbox = posts.map((post)=>{
  const properties = Object.values(post.properties)
  const CheckboxProperties = properties.filter(property => property.type === "checkbox").map((prop)=>{
  return <div><input type="checkbox" checked={prop.checkbox} /></div>
  })
  return <div>{CheckboxProperties}</div>
})

  const urls = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const urlsProperties = properties
      .filter((property) => property?.type === "url")
      .map((prop) => {
        return (
          <div>
            <a href={prop?.url} />
            {prop?.url}
          </div>
        );
      });
    return <div>{urlsProperties}</div>;
  });

  const Filemedia = posts.map((post) => {
    const properties = Object.values(post?.properties);
    const FilemediaProperties = properties
      .filter((property) => property?.type === "files")
      .map((prop) => {
        return prop?.files?.map((item) => {
          return (
            <div>
              <Link href={item?.file?.url}>
                <a>{item?.name}</a>
              </Link>
            </div>
          );
        });
      });
    return <div>{FilemediaProperties}</div>;
  });

  return (
    <div className=" w-full flex flex-col items-center justify-center min-h-screen max-w-screen-2xl bg-white">
      <h2 className="mb-[70px]">All Posts</h2>
      <div className="w-4/5 grid grid-cols-3 gap-10 justify-center items-center">
        {posts.map((post) => {
          console.log(
            "postingggggggggg",
            post?.properties?.Name?.title[0]?.text?.content
          );
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <Link className="" href={`/${post.id}`}>
              <div className="shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] justify-center items-center rounded-2xl">
                <div className="w-full">
                  <img
                    src={post?.cover?.external?.url}
                    alt=""
                    className="w-full min-h-[210px] max-h-[210px] object-cover rounded-t-2xl"
                  />
                </div>

                <div className="py-2 px-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 rounded-md cursor-pointer ${
                        "bg-" + post?.properties?.Select?.select?.color + "-400"
                      }`}
                    >
                      {post?.properties?.Select?.select?.name}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-neutral-500"></div>
                    <span className="text-neutral-500">{date}</span>
                  </div>
                  <h1 className="text-2xl font-semibold">
                    {post?.properties?.Name?.title[0]?.text?.content}
                  </h1>
                  <div className="  flex-grow h-[90px] p-3 ">
                    {/* <Text text={post.properties.Text.rich_text} /> */}
                  </div>
                  <div className="flex items-center  w-[60px]">{Filemedia}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {}
    </div>
  );
}

export default index;

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
