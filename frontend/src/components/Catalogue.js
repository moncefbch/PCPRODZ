import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/ProductAction";
import SearchItem from "./SearchItem";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";
import Axios from "axios";
import { Link } from "react-router-dom";
export default function Catalogue() {
  const text = "";
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(text));
  }, [dispatch, text]);

  //create function doSomeSeeding that will use axios to get from api/products/seed
  const doSomeSeeding = async () => {
    const { data } = await Axios.get("/api/products/seed");
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <div>{error}</div>
      ) : products ? (
        <div className="d-flex flex-wrap paddingAuto">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
          ) : (
            products.map((product) => (
              <Link
                to={`/admin/product${product._id}`}
                className="font-cabin notextdecoration labeloflink active"
                style={{ color: "black" }}
              >
                <div className="d-flex flex-wrap paddingAuto">
                  <div
                    style={{ width: "320px", borderColor: "#e5e5e5" }}
                    className="notextdecoration marginAuto card-container simpleBorder  radius-10 mrgn-30"
                  >
                    <SearchItem key={product._id} product={product} />
                  </div>
                </div>{" "}
              </Link>
              //<NewSearchItem key={product._id} product={product} />
            ))
          )}
        </div>
      ) : (
        <div>ya pas de protuits</div>
      )}
      <button onClick={doSomeSeeding}>SHEESH!</button>
    </div>
  );
}
