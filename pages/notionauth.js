import React from 'react'

function notionauth() {
  return (
    <div className=' flex items-center justify-center w-screen h-screen'>
        <div className='p-2 bg-gray-400 rounded-md text-white'>
            <a href='https://api.notion.com/v1/oauth/authorize?client_id=d548655f-7faa-40a9-9503-9954997a4a7c&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fnotion%2Fcallback'>Go to notion page</a>
        </div>
    </div>
  )
}

export default notionauth