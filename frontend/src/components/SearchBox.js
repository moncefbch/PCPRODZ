import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search=name=${searchQuery}`;
    }
  };
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get("/api/products/suggestions");
      setSuggestions(data);
    };
    fetchData();
  }, []);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="boxx overlay">
      <form className="input-group rounded" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control  searchinputradius"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleChange}
          aria-describedby="search-addon"
          style={{ width: "10%" }}
        />
        <span
          className="input-group-text border-1 "
          id="search-addon"
          style={{
            backgroundColor: "#3c3c3c",
          }}
        >
          <a
            href=""
            onClick={handleSubmit}
            style={{
              background: "none",
              width: "55px",
              height: "15px",
              marginTop: "-10%",
            }}
          >
            <i className="fa fa-search ms-auto " style={{ color: "white" }}></i>
          </a>
        </span>
      </form>

      {searchQuery.length > 0 && (
        <div className="dataResult">
          {filteredSuggestions.slice(0, 7).map((suggestion) => (
            <li
              key={suggestion}
              className="dataItem"
              onClick={() => {
                setSearchQuery(suggestion);
                let element = document.getElementsByClassName("dataResult");
                element[0].style.display = "none";
              }}
            >
              {suggestion}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
