import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getData from './getData'

 function userLink() {
    const[link,setlink]=useState('')
    const [val,setVal]=useState([])
    const[errorcheck,setErrorcheck]=useState(false)
    const[error,setError]=useState('')
    
 const path = link.split('/')[3]

 const pageId=path?.split('-')[1]
 console.log(pageId)
 console.log(pageId?.length == 32)
 if(pageId?.length == 32){
    //   async()=>{
    //     const data=await getData(pageId)
    //  console.log(data)
    //   }
    async function gpd (){
        const data = await getData(pageId)
        console.log(data)
        const dataVal = Object.values(data.data)
        
        console.log(dataVal.length)
        console.log(dataVal.length == 0)
        if(dataVal.length == 0){
            setErrorcheck(true)
            
                setError('Check wheather the url you have provided is correct and also ensure that it is shared to public')
           console.log(error)
            
        }
        // if(data.data)
       
    }
    gpd()
 }




  return (
    <div className='w-screen h-screen flex items-center justify-center '>
        <div className='flex flex-col  bg-slate-400 w-1/2 p-10'>
            <div className='p-2'>notion page link</div>
            <div className='p-2'>
                <input type='text' className='bg-gray-100 w-3/4 font-normal p-1.5 text-md' value={link} onChange={e=>setlink(e.target.value)}/>
                {/* <a href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=8265c9b884894e7996acfc25e37c373c&redirect_uri=https://localhost:3000&response_type=code">Add to Notion</a> */}
            </div>
             {errorcheck?<div>{error}</div>:('')}
        </div>
    </div>
  )
}

export default userLink