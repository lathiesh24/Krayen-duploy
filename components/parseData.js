import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Parsedata({page}) {
    console.log('datapage',page)

    if(page?.properties?.PaCv){
      console.log('page.properties.PaCv[0]',page.properties.PaCv[0])
      return (
          <div className=''>
              <div>{page.properties.PaCv[0]?.[0]}</div>
          </div>
      )
  }
  if(page?.properties?.RUVB){
    console.log('page?.properties?.RUVB',page?.properties?.RUVB[0])
    return(
        <div className='mt-3 mb-3 pl-20'>
            <img className='max-w-xs min-width: min-content min-height: min-content max-height: max-content' src={page.properties.RUVB[0]?.[1]?.[1]} alt={page.properties.RUVB[0]?.[0]}/>
        </div>
    )
}
  
  if(page?.properties?.['MNh@']){
    console.log(' page.properties["MNh@"]?.[0]', page.properties["MNh@"]?.[0]?.[0])
      const tags = page.properties["MNh@"]?.[0]?.[0]
     const indTags = tags.split(',')
      return (
          <div className='m-4'>
              {indTags.map((tags)=>{
          return <span className='pl-2 pb-1 pr-2 m-2 bg-lime-200 rounded-sm'>{tags}</span>
               })}
          </div>
      )
  }
  
  
  
  if(page?.properties?.["}?e`"]){
      return (
          <div>
              <a className='' href={page.properties["}?e`"]?.[0]?.[1]?.[1]}>{page.properties["}?e`"]?.[0]?.[0]}</a>
          </div>
      )
  }
  
  if(page?.properties?.["~nVs"]){
      const text = page.properties["~nVs"][0]
      return (
          <div className=''>
              {ndn.map((temp)=>{
          // console.log('temp',temp)
          if(temp[0]){
            return <span>{temp[0]}</span>
          }
      })}
          </div>
      )
  }
  return 
}

