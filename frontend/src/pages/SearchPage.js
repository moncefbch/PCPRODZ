import FilterTag from "../components/FilterTag";
import SearchItem from "../components/SearchItem";
import Axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductAction";
//import error message box from error message box component
import ErrorMessageBox from "../components/ErrorMessageBox";
import FilterConfiguration from "../components/FilterConfiguration";
import NewSearchItem from "../components/NewSearchItem";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import SkeletonPlaceHolder from "../components/SkeletonPlaceHolder";
import { Link } from "react-router-dom";

export default function SearchPage(props) {
  /* const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
const name = queryParams.get('name');
const type = queryParams.get('type');*/
  const [category, setCategory] = useState("");

  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const queryParams = new URLSearchParams(pathname);
    const id = queryParams.get("id");
    const name = queryParams.get("name");
    const type = queryParams.get("type");
    const category = queryParams.get("category");
    console.log(category);
  }, []);

  /* const {search} = useLocation();
const match = search.match(/category=(.*)/);
const type = match?.[1];
console.log(type);*/
  //extract the page from the url
  const { name } = useParams();
  const { page } = useParams();
  //const {category} = useParams();
  //extract the sort from the url
  const { order } = useParams();
  const { min } = useParams();
  const { max } = useParams();

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
  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || "";
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    // if the name is undefined, then set it to empty string
    const filterName = filter.name || name || "";

    return `/search=category=${filterCategory}&name=${filterName}&order=${sortOrder}`;
  };

  const [view, setView] = useState("grid");

  return (
    <div>
      <header className="font-cabin font-bold font-40 mrgnlft-50 mrgntp-30">
        Pc portable
      </header>

      <div className="flex-container mrgn-30  ">
        <div className="flex-item-left-25 pdng-15 font-25">
          {/*hna filter component */}
          <FilterConfiguration />
        </div>
        <div className="flex-item-right-70 radius-10 whitebackground">
          <div className="container">
            <div className="row">
              <header
                className="d-sm-flex align-items-center border-bottom mb-4 pb-3"
                x
              >
                {loading ? (
                  <LoadingBox />
                ) : error ? (
                  <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
                ) : (
                  <header className="centerwhenmobile font-cabin font-25 mrgn-30">
                    {"Nombre d'Articles : " + products.length}{" "}
                  </header>
                )}

                <div className="ms-auto centerwhenmobile">
                  <select
                    className="form-select d-inline-block w-auto"
                    value={order}
                    onChange={(e) => {
                      props.history.push(
                        getFilterUrl({ order: e.target.value })
                      );
                    }}
                  >
                    <option className="font-20" value="defualt">
                      default
                    </option>
                    <option className="font-20" value="newest">
                      Newest Arrivals
                    </option>
                    <option className="font-20" value="lowest">
                      Price: Low to High
                    </option>
                    <option className="font-20" value="highest">
                      Price: High to Low
                    </option>
                  </select>
                  <div
                    className="removeformobile btn-group"
                    style={{ marginTop: "-5px" }}
                  >
                    <a
                      href="#"
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      title="List view"
                      onClick={() => {
                        setView("list");
                      }}
                    >
                      <i className="fa fa-bars"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      data-bs-toggle="tooltip"
                      title="Grid view"
                      onClick={() => {
                        setView("grid");
                      }}
                    >
                      <i className="fa fa-th"></i>
                    </a>
                  </div>
                </div>
              </header>
            </div>
            <div className="d-flex flex-wrap paddingAuto">
              <FilterTag text={"filter 1"} />
              <FilterTag text={"filter 2"} />
              <FilterTag text={"filter 3"} />
              <FilterTag text={"filter 4"} />
            </div>

            <br />
            <div className="productslistresponsive d-flex flex-wrap ">
              {loading ? (
                <SkeletonPlaceHolder />
              ) : error ? (
                <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
              ) : (
                products.map(
                  (product) =>
                    view === "grid" ? (
                      <div
                        style={{ width: "320px", borderColor: "#e5e5e5" }}
                        className="notextdecoration marginAuto card-container simpleBorder  radius-10 mrgn-30"
                      >
                        <Link
                          to={`/product/${product._id}`}
                          className="font-cabin text-muted notextdecoration labeloflink active"
                          style={{ color: "black" }}
                        >
                          <SearchItem key={product._id} product={product} />
                        </Link>
                      </div>
                    ) : (
                      <div
                        className="width-full simpleBorder radius-10"
                        style={{
                          width: "80%",
                          margin: "auto",
                          marginTop: "35px",
                          borderColor: "#e5e5e5",
                        }}
                      >
                        <Link
                          to={`/product/${product._id}`}
                          className="font-cabin text-muted notextdecoration labeloflink active"
                          style={{ color: "black" }}
                        >
                          <NewSearchItem key={product._id} product={product} />
                        </Link>
                      </div>
                    )

                  //
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
