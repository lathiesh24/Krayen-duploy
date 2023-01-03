import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { Parsedata } from "../../components/parseData";
import { getPageData } from "../../components/getData";
import { getTableData } from "../../components/getData";
import { useState } from "react";


export default function page ({posts}){
    // const router = useRouter();
   
    // console.log(router.query.id)
    // console.log('page',posts)

    let val
     val = Object.keys(posts)
     const fun = val.flatMap((values)=>{
        // console.log('fun',values)
        const datas =posts[values].value
        console.log('datas',datas)
        return datas
     })
    //  console.log('fun',fun)
    //  console.log('fun?.properties?.title?.[0]',fun?.properties?.title?.[0])
    return (
        <div className=" w-4/5  flex flex-col pl-96 justify-center pb-40 pt-20">
            {/* <div>{fun?.properties?.title?.[0]}</div> */}
            {fun.map((page)=>{
                console.log('page',page)
                // <div>{page?.properties?.title?.[0]}</div> &&
                if (page?.type == 'header'){
                    return (
                        <div className=" font-semibold text-2xl pb-3">
                           {page?.properties?.title?.[0]}
                        </div>
                    )
                }
                if(page?.type ==  
                    "sub_sub_header"){
                        return (
                            <div className='font-semibold text-l pb-3'>{page?.properties?.title[0]}</div>
                        )
                    }
                    if(page?.type ==  
                        "sub_header"){
                            return (
                                <div className='font-semibold text-xl pb-3'>{page?.properties?.title[0]}</div>
                            )
                        }
                    if(page?.type == "to_do"){
                        if(page?.properties?.checked[0] == 'Yes'){
                            const todo =page?.properties?.title?.[0]
                            console.log('todo',todo)
                            return (
                                <div className='pt-2 pb-2'>
                                    <input className="h-4 w-4 appearance-none  bg-blue-600 mr-2" type="checkbox" value="" id="Yes" checked disabled/>
                                        <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="Yes">
                                                       {todo}
                                                    </label>
                                </div>
                            )
                        }
                        if(page?.properties?.checked[0] == 'No'){
                            const todo =page?.properties?.title?.[0]
                            return (
                                <div className='pt-2 pb-2'>
                                <input className='h-4 w-4 mr-2' type="checkbox" value="" id="No"  disabled/>
                                    <label className="" htmlFor="No">
                                                   {todo}
                                                </label>
                            </div>
                            )
                        }  

                    }
                    // if(page?.type == 'text' ){
                    //     console.log('(page?.properties',page?.properties)
                        if(page?.parent_id == page?.id){
                            console.log('(page?.properties',page?.properties)
                        }
                    // }
                    if(page?.type == 'callout'){
                        return (
                            <div className='flex bg-yellow-50 p-3 mt-2 mb-2'>
                                <div className='pl-3'>{page?.format?.page_icon}</div>
                                <div className='pl-6'>{page?.properties?.title[0]}</div>
                            </div>
                        )
                    }
                    if(page?.type == 
                        "numbered_list"){
                            let i;
                            i=0
                            i++
                            return (
                                <div className='mt-3 mb-3' >{i}<span className="pr-2">)</span>{page?.properties?.title[0]}</div>
                            )
                        }
                //absolute right-4 top-2
                if(page?.type == 'code'){
                    return (
                        <div className='  bg-black mt-10 mb-10 opacity: 0.6 rounded-md'>
                            <div className='flex justify-end pr-5 mt-3 text-red-500'>
                                {page?.properties?.language[0]}
                            </div>
                            <div className='mt-3 ml-8 mr-8 mb-8 text-white opacity: 0.2'>
                                 {page?.properties?.title[0]}
                            </div>
                        </div>
                    )
                }
                if(page?.type == 'quote'){
                    return (
                    <div className='border-l-4 border-black bg-gray-100 pl-5 pt-2 pb-2 mt-2'>{page?.properties?.title[0]}</div> 
                    )
                }
                if(page?.type == 'text'){
                    <div className=" pb-3 pt-3">
                    {/* {page?.id} */}
                    <div>{page?.properties?.title?.[0]}</div>
                    </div>
                }

                // if(["4606f5e4-00c3-4d68-b8a0-353328ad0c3c"].value.properties["MNh@"])
                // if(page?.properties?["MNh@"]:){
                //      return <div>irukku</div>}
                
                
               
                if(page?.type == 'page' && page?.format?.page_cover_position){
                       
                        // if(page?.properties == link){
                        //     return (
                        //         <div>
                        //             <a className='' href={page.properties["}?e`"]?.[0]?.[1]?.[1]}>{page.properties["}?e`"]?.[0]?.[0]}</a>
                        //         </div>
                        //     )
                        // }
                            
                    return (
                        <div>
                           <div className=' text-6xl font-semibold flex pb-10 pt-14'>{page?.properties.title[0]}</div>
                           {/* <div className="">{page?.properties?.MNh@?.[0]}</div> */}
                           {/* <Parsedata page={page}/> */}
                           
                        </div>
                    )
                }
                
               
                
                // console.log('page',page)
                return 
            })}
        </div>
    )
}

 export const getStaticPaths = async () =>{
   const datas = await getTableData()
   console.log('dataas',datas)
    return {
        paths: datas.map((page) => ({ params: { id: page.id } })),
            
        fallback: true,
      };
}

export async function getStaticProps(context) {
    console.log('context',context)
const { id } = context.params;
    const posts = await getPageData(id);
    console.log('props',posts)
    return {
      props: {
        posts,
      },
    };
  }