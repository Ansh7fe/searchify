import React,{useEffect} from 'react'
import {useLocation} from "react-router-dom";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import {useResultContext} from "../contexts/ResultsContextProvider";
const Result = () => {
    const {results,isLoading,getResults,searchTerms}=useResultContext();
    const location=useLocation();
    useEffect(()=>{
        if(searchTerms){
            if(searchTerms==="/video"){
                getResults(`/ search/q=${searchTerms} video`)
            }
            else{
                getResults(`${location.pathname}/q=${searchTerms}&num=40`)

            }
        }
    },[searchTerms,location.pathname])
    if(isLoading){
        return <Loading />
    }
       switch (location.pathname) {
           case '/search':
               return (
                   <div className="flex justify-center items-center flex-wrap space-y-6 sm:x-56">
                       {results?.results?.map(({link , title},index)=> (
                            <div key={index} className="md:w-2/5 w-full">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-sm">{link.length>30?link.substring(0,30):link}</p>
                                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-900">{title}</p>
                                </a>
                            </div>
                       ))}
                   </div>
               )
           case '/image':
               return (
                   <div className="flex flex-wrap justify-center items-center">
                       {results?.image_results?.map(({image,link:{href,title}},index)=>(
                       
                       <a href={href} className="sm:p-3 p-5" target="_blank" rel="noreferrer" key={index}>
                           <img src={image?.src} alt={title} loading="lazy"/>
                           <p className="w-36 break-words text-sm mt-2">{title}</p>
                       </a>

                       ))}
                   </div>
               )
           case '/news':
            return (
                <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
                {results?.entries?.map(({ id, links, source, title }) => (
                  <div key={id} className="md:w-2/5 w-full ">
                    <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                      <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                    </a>
                    <div className="flex gap-4">
                      <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
                    </div>
                  </div>
                ))}
              </div>
            )
           case '/video':
               return (
                   <div className="flex flex-wrap justify-center items-center w-full">
                       {results?.results?.map((video,index)=>(

                           <div key={index} className="p-2">
                                { video.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0]?.href} controls width="345px" height="250px"/>}
                           </div>
                       )
                       )}
                   </div>
               )
           default:
               return 'ERROR!';
       }
    
}

export default Result
