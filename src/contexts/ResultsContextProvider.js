
import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchTerms, setSearchTerms] = useState('');

    const getResults = async (url) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        })
        const data=await response.json();
        if(url.includes('/news')){

            setResults(data.entries)
        }
        else if(url.includes('/image')){
            setResults(data.image_results) 
        }
        else{
            setResults(data.results);
        }

        setResults(data);
        setIsLoading(false)
    }
    return <ResultContext.Provider value={{results,getResults,searchTerms,setSearchTerms,isLoading}}>
        {children}
    </ResultContext.Provider>
}
export const useResultContext = ()=>useContext(ResultContext)

