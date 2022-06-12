import React,{useEffect,useState} from 'react'
import {useDebounce} from "use-debounce";
// this basiclly sends new request on typing every letter-s(r)u(r)p(r)... and so on now what debounce do is we can apply restrictions that how many secs after we have to send request otherwise it will spam our servers and slow it down
import {useResultContext} from "../contexts/ResultsContextProvider";
import Links from "./Links"
const Search = () => {
    const [text, setText] = useState('');
    const {setSearchTerms}=useResultContext();
    const [debouncedValue]=useDebounce(text,300);
    useEffect(() => {
        if(debouncedValue) setSearchTerms(debouncedValue)
    }, [debouncedValue])
    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-12 mt-2">
            <input 
                value={text}
                className="sm:w-96 w-84 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search here..."
                onChange={(e)=>setText(e.target.value)}
            />
            {text &&(
                <button className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={()=>setText('')}>x</button>
            )}
            <Links />
        </div>
    )
}

export default Search
