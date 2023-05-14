import React, { useEffect } from "react";
import { ytSearch } from "../utils/data";
import VideoBanner from "./VideoBanner";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  
  const [searchResults,setSearchResults]=React.useState([])
  const [params]=useSearchParams()
  const query=params.get("query")
  useEffect(()=>{
    SearchApi()
  },[query])

  const SearchApi =async ()=>{
      const data= await fetch(ytSearch+query)
      const json=await data.json()
      console.log(json)

      setSearchResults(json.items)
  }
  return (
    <div className="p-2 shadow-lg mt-4 w-full flex items-center justify-evenly">
       {
          searchResults.length>0 && ( 
          <div>
              {
                  searchResults.map((video)=>{
                    return(
                     <Link to={'/watch?v='+video.id.videoId}>
                        <VideoBanner {...video}/>
                    </Link>
                    )
                  })
              }
            </div>
            )
      }

    </div>
  );
};

export default Search;
