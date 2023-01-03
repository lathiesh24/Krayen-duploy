import axios from 'axios'
import React from 'react'

function index() {
    const notionData= async () => {
        const apiData = await axios.get("https://notion-api.splitbee.io/v1/page/975fa599cff24ee4b16f4a8a93e18683")
        console.log(apiData.data)
    }
  return (
    <div className='flex flex-col  items-center justify-center h-screen'>
        <div>heyy</div>
        <button onClick={notionData} className='mt-4 ml-3 inline-block px-6 py-2.5 bg-indigo-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Click to refresh</button>
    </div>
  )
}

export default index