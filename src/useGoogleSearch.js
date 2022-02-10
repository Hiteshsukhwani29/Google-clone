import { useState,useEffect } from "react";

const useGoogleSearch = (text) =>{

    const apikey = process.env.REACT_APP_CUSTOM_SEARCH_API;

    const [data,setdata] = useState(null);

    useEffect(() => {
      const fetchdata = async() =>{
          fetch(
              `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=e0bd641ae53f93d6d&q=${text}`
          )
          .then(response=>response.json())
          .then(result=>{setdata(result)})
      }
      fetchdata();
    }, [text])
    
    return {data}
};
export default useGoogleSearch;