import React from 'react'

const DetailsRendering = () => {
  return (
    <div className='mt-20px'>
      <div className="bg-red-400 rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className=" font-bold uppercase  text-white">
              <th className="px-4 pb-3">NAME</th>
              <th className="px-4 pb-3">URL</th>
              <th className="px-4 pb-3">TYPE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white">
              <td className="border-t px-4 py-5">Lathiesh</td>
              <td className="border-t px-4 py-5">www.krayennotionsite.com</td>
              <td className="border-t px-4 py-5">BLOG</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-white">
              <td className="border-t px-4 py-5">Rakesh</td>
              <td className="border-t px-4 py-5">www.krayennotionsite.com</td>
              <td className="border-t px-4 py-5">BLOG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DetailsRendering
