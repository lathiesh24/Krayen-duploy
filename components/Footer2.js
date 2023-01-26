import React from 'react'

const Footer2 = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
        <div className='flex flex-wrap justify-between sm:justify-center sm:w-full 2xl:space-x-80 xl:space-x-64 lg:space-x-44 md:space-x-16 sm:space-x-8' >
            <div>
               <ul>
                    <li className='font-bold'>Company</li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Refund Policy</a></li>
                    <li><a href="">Status</a></li>
                    <li><a href="">Status</a></li>
               </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold'>Resources</li>
                    <li><a href="">Docs</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Icons generator</a></li>
                    <li><a href="">Gitbook to Notion</a></li>
                    <li><a href="">Showcase</a></li>
                    <li><a href=""> Notion image links tool</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold'>Notion templates</li>
                    <li><a href="">Docs template</a></li>
                    <li><a href="">Blog template</a></li>
                    <li><a href="">Changelog template</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer2