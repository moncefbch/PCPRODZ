import React, { useState } from "react";
export default function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
     window.location.href = `/search=${searchQuery}`;
    }
  }
  return (
    <div className="box overlay">
      <form className="input-group rounded" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleChange}
          aria-describedby="search-addon"
        />
        <span        
            className="input-group-text border-1"
            id="search-addon"
            style={{ backgroundColor: "whitesmoke" }}>
              <a onClick={handleSubmit}> 
          <i  className="fa fa-search ms-auto whitebackground" ></i>
          </a>
        </span>
      </form>
    </div>
  );
}