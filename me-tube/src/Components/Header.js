import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { ytSuggestions } from "../utils/data";
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions,setShowSuggestions]=React.useState(false);
  function toggle() {
    dispatch(toggleSidebar());
  }
  function handleInput(event) {
    setSearchQuery(event.target.value);
  }
  useEffect(() => {
    const timer=setTimeout(()=>getSuggestions(),200)
    return()=>{
      clearTimeout(timer)
    }
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(ytSuggestions + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <div className="fixed top-0 w-full bg-white shadow-sm">
      <div className="flex p-3 items-center  ">
        <div className="flex gap-3 items-center basis-1/4 ">
          <img className="h-6" src="ham.png" alt="logo" onClick={toggle} />
          <Link to="/">
            <img src="yt_logo.png" alt="logo" className="h-9" />
          </Link>
        </div>

        <div className="basis-1/2 flex items-center justify-center">
          <div className="w-3/5 h-9">
            <input
              className="w-full h-full border rounded-l-full px-3 "
              type="text"
              value={searchQuery}
              onChange={(event) => handleInput(event)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />
            {(showSuggestions&&suggestions.length>0) && (
              <div className="border rounded-lg bg-white mt-2 fixed w-[29.7%]">
                {suggestions.map((suggestion) => {
                  return (
                    <div className="px-4 py-1  rounded-md hover:bg-slate-200">
                      {suggestion}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button className="h-9 w-14 bg-gray-400 rounded-r-full flex items-center justify-center p-2">
            <img className="h-5 " src="search.png" alt="something"></img>
          </button>
          <button className="h-9 w-9 bg-gray-400 rounded-full ml-7 flex items-center justify-center p-2">
            <img className="h-5" src="mic.png" alt="something"></img>
          </button>
        </div>

        <div className="ml-auto">
          <button className="h-12 rounded-full">
            <img className="h-full p-2" src="profile.png" alt="something"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
