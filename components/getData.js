import { async } from '@firebase/util';
import axios from 'axios'
import React, { useEffect } from 'react'

 function getData() {
  

      //  const pageId = 'f3a6cc01430b43c9baa58e0e03cbcfff'
    
    // const blocks = await fetch(
    //   `https://notion-api.splitbee.io/v1/page/${pageId}`
    // ).then((res) => res.json());
    // console.log(blocks)
// useEffect(()=>{
// // getPageData()
// },[])
  return (
    <div>hey</div>
  )
}

export default getData

// export const Text = ({ text }) => {
//   if (!text) {
//     return null;
//   }
//   return text.map((value) => {
//     const {
//       annotations: { bold, code, color, italic, strikethrough, underline },
//       text,
//     } = value;
//     return (
//       <span
//         className={[
//           bold ? styles.bold : "",
//           code ? styles.code : "",
//           italic ? styles.italic : "",
//           strikethrough ? styles.strikethrough : "",
//           underline ? styles.underline : "",
//         ].join(" ")}
//         style={color !== "default" ? { color } : {}}
//       >
//         {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
//       </span>
//     );
//   });
// };

export async function getPageData(id){
  //4606f5e400c34d68b8a0353328ad0c3c
  const data=await fetch(`https://notion-api.splitbee.io/v1/page/${id}`)
  .then((res) => res.json());
  
  console.log('data',data)
  return data
  }

  export async function getTableData (id){
    const data = await fetch(`https://notion-api.splitbee.io/v1/table/4c699e3e758d41248751780fefed7d23`)
    .then((res) => res.json());
    console.log('TD',data)
    return data
  }