import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion-x'

const ParentDefault = () => {
        
  const  [deadData, setDeadData] = useState([])
     
      
   useEffect(() =>{
          notionData()
              // eslint-disable-next-line
   }, [])  
return(
  <div> getpageLink
        <button onClick={notionData} className='flex font-medium'>get</button>
        <NotionRenderer />
     </div>
     ///pagelink/getpageLink.js
)
}


export default ParentDefault