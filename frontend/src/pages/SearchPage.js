import React from "react";
import FilterTag from "../components/FilterTag";
import SearchItem from "../components/SearchItem";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function SearchPage(props) {
  //const name equals to the text in the url
  const name = props.match.params.text;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (name){
        const { data } = await Axios.get("/api/products/search?text=" + name);
        setProducts(data);
      }
    };
    fetchData();
  }, []);
  //console.log(products);
  return (
    <div>
      <header className="font-cabin font-bold font-40 mrgnlft-50 mrgntp-30">
        Pc portable
      </header>
      <div className="flex-container mrgn-30">
        <div className="flex-item-left-25 radius-10 whitebackground"></div>
        <div className="flex-item-right-70 radius-10 whitebackground">
          <header className="font-cabin font-bold font-30 mrgn-30">
            {products.length + " articles"}
          </header>
          <div className="d-flex flex-wrap paddingAuto">
            <FilterTag text={"filter 1"} />
            <FilterTag text={"filter 2"} />
            <FilterTag text={"filter 3"} />
            <FilterTag text={"filter 4"} />
          </div>
          <hr className="productMargin width80pc" />
          <br />
          <div className="d-flex flex-wrap paddingAuto">
            { !products.length ? <div>hello world</div>: (
              products.map((product) => (
                <SearchItem key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
