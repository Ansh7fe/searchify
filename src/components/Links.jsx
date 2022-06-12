import React from 'react'
import {NavLink} from "react-router-dom";

const links=[
    {url:'/search',text:'🔎 All',index:1},
    {url:'/news',text:'📰 News',index:2},
    {url:'/image',text:'📷 Images',index:3},
    {url:'/video',text:'📹 Videos',index:4}, 
]
const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-5 ">
            {links.map(({url,text,index})=>(
                <NavLink key={index} to={url} className="m-4" activeclassname="text-blue-700 border-b-2 dark:tex-blue-300 border-blue-700 pb-3">{text}</NavLink>
            ))}
        </div>
    )
}

export default Links
