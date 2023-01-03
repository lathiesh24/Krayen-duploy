// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// // import { NotionRenderer } from "react-notion"
// import styles from "../../styles/index.module.css";
// import Link from "next/link";
// import { useRouter } from 'next/router';




// function Table() {
//     const[data,setdata]=useState([])
    
//     async function getPage(){
        
//         const pageId = '4c699e3e758d41248751780fefed7d23'
//         const blocks = await axios.get(`https://notion-api.splitbee.io/v1/table/${pageId}`)
//         console.log('blocks',blocks.data)
//         setdata(blocks.data)
//         // const data =await axios.get(`https://notion-api.splitbee.io/v1/page/${pageId}`)
//         // // console.log(data.data)
//         // setData(data.data)
//     //    const temp= await axios.get(`https://notion-api.splitbee.io/v1/page/797b75ccba884af2881d30bbd263dd8f`)
        
//     //     const da =  await axios.get(`https://notion-api.splitbee.io/v1/page/f3a6cc01430b43c9baa58e0e03cbcfff`)
//     //     console.log(temp.data)
//     //     console.log(da.data)
//     }
//     console.log(data)
//     useEffect(()=>{
//         getPage()
//           },[])
//   return (
//     <div>
//     <h2 className={styles.heading}>All Posts</h2>
//         <ol className={styles.posts}>
//           {data.map((post) => {
           
//             return (
//               <li key={post.id} className={styles.post}>
//                 <h3 className={styles.postTitle}>
//                   <Link href={`/pagelink/${post.id}`}>
//                     <div>{post.Name}</div>
//                   </Link>
//                 </h3>

//                 <p className={styles.postDescription}>{post.Date}</p>
//                 <Link href={`/pagelink/${post.id}`}>Read post →</Link>
//               </li>
//             );
//           })}
//         </ol>
//     </div>
//   )
// }

// export default Table