import React from 'react'
import searchBarCss from "./SearchBar.module.css";

function SearchBar({placeholder}) {
    return (
        <div className={searchBarCss.SearchBar}>
            <input type="text" placeholder={placeholder}/>  <button>Search</button>
          </div>
    )
}

export default SearchBar
