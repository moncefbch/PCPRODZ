import React ,{useState} from "react";
export default function SearchBox() {
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    function GetData(val)
    {
        setData(val.target.value)
        setPrint(false)   
    }
    return (
    <div className="box overlay">
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={GetData}
      />
      <span
        className="input-group-text border-1"
        id="search-addon"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <a onClick={()=>setPrint(true)} href={`/search=${data}`} >
          <i className="fa fa-search ms-auto whitebackground"></i>
        </a>
      </span>
    </div>
    </div>
  );
}
