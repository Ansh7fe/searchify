import React from 'react'
import {Link} from "react-router-dom";
import Search from "./Search"
const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200  ">
            <div className="flex justify-between items-center space-x-5 w-screen ">
                <Link to="/">
                    <p className="text-2xl bg-blue-400 font-bolder text-white border-gray-200 py-1 px-2 rounded dark:bg-gray-500 text-gray-900 mb-3">
                        Searchify 🔎
                    </p>
                </Link>
                <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-lg dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-2 hover:shadow-lg mb-3">
                        {darkTheme?'Light 💡' :'Dark 🌙'}
                    </button> 
            </div>
        <Search />
        </div>
    )
}

export default Navbar
