import { useState, FC } from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import setdata from '../assets/new.json';


export interface CardProps{
    data:any
}

const Card:FC<CardProps>=({data})=>{
 
return(
    <Router>
    <>
    <div className=''>
        <div className='w-full flex flex-col items-center gap-8 '>
            {setdata.map((dataParse:any,key:any)=>(
              // console.log("key",key),
            <div key={key} className='flex w-1/2  p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl duration-300 cursor-pointer'>
                <div className='bg-primary-1 p-4 grid gap-2 rounded-xl'>
                    <div className=' w-full flex flex-col gap-4'>
                        <div className='w-full flex gap-4'>
                          <div className='w-1/2 h-1/2 rounded-xl'>
                              <img src={dataParse.Image[0].url} className="rounded-xl" />
                          </div>
                          <h2 className=''>{dataParse.Ttile}</h2>                                                                                                                                                                                                                                                                                                          
                       </div>
                       <p>{dataParse.Description}</p>
                    </div>
                    <div className='w-full flex justify-end'>
                    {/* <p className='w-fit bg-secondary-4 p-4 rounded-xl text-neutral-1'>
                            Read more... 
                            </p> */}
                    <Link to={`/blog/${dataParse.id}}`}>Read More..</Link>
                    </div>
                </div>
              
            </div>
               )
            )}
        </div>
    </div>
    </>
    </Router>
)
}

export default Card