import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listReacentProducts } from "../actions/ProductAction";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";
import SearchItem from "./SearchItem";

export default function NewNewProductSection() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];
  const dispatch = useDispatch();
  const productMostRecentList = useSelector(
    (state) => state.productMostRecentList
  );
  const { loading, error, products } = productMostRecentList;
  console.log(products);
  useEffect(() => {
    // dispatch(listProducts(""));
    dispatch(listReacentProducts());
  }, [dispatch]);

  return (
    <div
      id="newproducts"
      className="font-cabin width-full align-center font-40"
      style={{ paddingTop: "150px" }}
    >
      <header>NOUVEAUTES</header>

      <div
        className="productslistresponsive padding-y width-full d-flex flex-wrap paddingAuto radius-10 whitebackground"
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
        ) : products.length >= 1 ? (
          products
            .slice(0, 8)
            .map((product) => (
              <SearchItem key={product._id} product={product} />
            ))
        ) : (
          <div style={{ margin: "auto" }}>There is no products currently</div>
        )}
      </div>
    </div>
  );
}
