import { useState,useEffect } from "react";

const useGoogleSearch = (text) =>{
    const [data,setdata] = useState();

    useEffect(() => {
      const fetchdata = async() =>{
          fetch(
              `https://www.googleapis.com/customsearch/v1?key=${process.env.CUSTOM_SEARCH_API}&cx=e0bd641ae53f93d6d&q=${text}`
          )
      }
    
    }, [text])
    
    return {data}
};
export default useGoogleSearch;