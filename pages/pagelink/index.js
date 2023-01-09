import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import getData from './getData'
// import { notion } from './not'

 function userLink() {
    const[link,setlink]=useState('')
    const [val,setVal]=useState([])
    const[errorcheck,setErrorcheck]=useState(false)
    const[error,setError]=useState('')

console.log('link',link)
console.log(link.split('/')[3])
   function getSite(){
    const path = link.split('/')[3]
    console.log(path)
    if(path?.split('-')){
      const pageId=path?.split('-')[1]
      console.log('pageid',pageId)
      console.log(pageId?.length == 32)
      async function getpagedata(){
      const pageData=await axios.get(`https://notion-api.splitbee.io/v1/page/${pageId}`)
      console.log(pageData)
      if(pageData){
        window.location.replace(`/page/${pageId}`)
      }
     }
     getpagedata()
    }
   

  if(path?.split('?')) {
    const pageId= path.split('?')[0] 
    console.log(pageId)
    async function getTableData(){
        const damta = await axios.get(`https://notion-api.splitbee.io/v1/table/${pageId}`)
        console.log(damta)
        // if(damta){
        //   window.location.replace(`/table/${pageId}`)
        // }
    }
    getTableData()
    
    // window.location.replace(`/pages/table/${pageId}`)
} 
   }





  return (
    <div className='w-screen h-screen flex items-center justify-center '>
        <div className='flex flex-col bg-black rounded-lg w-1/2 p-10'>
            <div className='p-2 font-semibold text-white mb-4'>Paste your Notion page link here</div>
            <div className='p-2'>
                <input type='text' className='bg-gray-100 w-11/12 font-normal p-1.5 text-md opacity-90 outline-none' value={link} onChange={e=>setlink(e.target.value)}/>
                {/* <a href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=8265c9b884894e7996acfc25e37c373c&redirect_uri=https://localhost:3000&response_type=code">Add to Notion</a> */}
            </div>
             {errorcheck?<div>{error}</div>:('')}
             <div>
              
              <button type="button" onClick={getSite} className=" mt-4 ml-3 inline-block px-6 py-2.5 bg-indigo-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Proceed</button>
             </div>
        </div>
    </div>
  )
}

export default userLink


