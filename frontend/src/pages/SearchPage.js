import FilterTag from "../components/FilterTag";
import SearchItem from "../components/SearchItem";
import Axios from "axios";
import { useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductAction";
//import error message box from error message box component
import ErrorMessageBox from "../components/ErrorMessageBox";
import FilterConfiguration from "../components/FilterConfiguration";
import NewSearchItem from "../components/NewSearchItem";

export default function SearchPage(props) {
  // get the query from the url
  /* const [searchParams , setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name")*/
  //const name equals to the text in the url
  //text is this form /searchname=asus&category=laptop
  // extract the name and category from text
  //const category= text.split("&")[1].split("=")[1];
  //search?name=${name}&category=${category}

  const text = props.match.params.text;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(text));
  }, [dispatch, text]);

  /* const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/search/category/${filterCategory}/name/${filterName}`;
  };*/

  return (
    <div>
      <header className="font-cabin font-bold font-40 mrgnlft-50 mrgntp-30">
        Pc portable
      </header>
      <div className="flex-container mrgn-30">
        <div className="flex-item-left-25 radius-10 whitebackground pdng-15 font-25">
          {/*hna filter component */}
          <FilterConfiguration />
        </div>
        <div className="flex-item-right-70 radius-10 whitebackground">
          <div class="container">
            <div class="row">
              <div class="col">
                {" "}
                <header className="font-cabin font-bold font-30 mrgn-30">
                  {loading ? (
                    <div>hello world</div>
                  ) : error ? (
                    <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
                  ) : (
                    products.length + " articles"
                  )}
                </header>
              </div>
              <div class="col-md-auto"></div>
              <div class="col col-lg-2">
                <div className="font-cabin font-bold font-30 mrgn-30">
                  Sort by{" "}
                  <select>
                    <option value="newest">Newest Arrivals</option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>
                    <option value="toprated">Avg. Customer Reviews</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap paddingAuto">
            <FilterTag text={"filter 1"} />
            <FilterTag text={"filter 2"} />
            <FilterTag text={"filter 3"} />
            <FilterTag text={"filter 4"} />
          </div>
          <hr className="productMargin width80pc" />
          <br />
          <div className="d-flex flex-wrap paddingAuto">
            {loading ? (
              <div>hello world</div>
            ) : error ? (
              <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
            ) : (
              products.map((product) => (
                <SearchItem key={product._id} product={product} />
                //<NewSearchItem key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
