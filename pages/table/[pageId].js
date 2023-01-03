import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/index.module.css";

function pageId() {
    // const [pageId,setPageId]=useState('')
    const router = useRouter();
    const pageId = router.query
    // async function getTableData(){
    //     const damta = await axios.get(`https://notion-api.splitbee.io/v1/table/${pageId}`)
    //     console.log(damta)
    // }
    // getTableData()
    const[data,setdata]=useState([])
    
    async function getPage(){
        
        const pageId = '4c699e3e758d41248751780fefed7d23'
        const blocks = await axios.get(`https://notion-api.splitbee.io/v1/table/${pageId}`)
        console.log('blocks',blocks.data)
        setdata(blocks.data)
       
    }
    console.log(data)
    useEffect(()=>{
        getPage()
          },[])
   
    console.log(pageId)
    // useEffect(()=>{
    //     async function getTableData(){
    //         const damta = await axios.get(`https://notion-api.splitbee.io/v1/table/${pageId}`)
    //         console.log(damta)
    //     }
    //     getTableData()
    // },[pageId])
  return (
    <div className='w-full flex flex-col items-center gap-8 pt-20'>
    <h2 className=' font-bold'>All Posts</h2>
        <ol className=''>
          {data.map((post) => {
            console.log('posts',post)
           
            return (
              // <li key={post.id} className='pt-10 flex w-1/2  p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl duration-300 cursor-pointer'>
              //   <h3 className={styles.postTitle}>
              //     <Link href={`/pagelink/${post.id}`}>
              //       <div>{post.Name}</div>
              //     </Link>
              //   </h3>

              //   <p className={styles.postDescription}>{post.Date}</p>
              //   <Link href={`/pagelink/${post.id}`}>Read post →</Link>
              // </li> w-56 max-h-20 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg
              <div key={post.id} className="flex justify-center ">
                 <div className="flex flex-col max-h-48 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl duration-300 cursor-pointer">
                   <img className="max-h-48 w-48" src="https://www.notion.so/images/page-cover/gradients_8.png" alt="" />
                <div className="p-6 flex flex-col justify-start">
               <h5 className="text-gray-900 text-xl font-medium mb-2">{post.Name}</h5>
                 <p className="text-gray-700 text-base mb-4 line-clamp-3">
              {post.Text}
                      </p>
                   <p className="text-gray-600 text-xs">{post.Date}</p>
                  <div className='mt-2'>
                  <Link href={`/pagelink/${post.id}`} >See more</Link>
                  </div>
                 </div>
                      </div>
               </div>
            );
          })}
        </ol>
    </div>
  )
}

export default pageId


