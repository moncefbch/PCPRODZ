import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carouselitem from "./Carouselitem";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";
import { listReacentProducts } from "../actions/ProductAction";

export default function NewProductsSection() {
  //const productList = useSelector((state) => state.productList);
  //const { loading, error, products } = productList;
  // next piece of code wad "   }, []);   " update : "   }, [dispatch]);   " 3lajal kanet hna error and this is how to handle it
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
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
      ) : (
        <div>
          <div
            className="font-cabin width-full align-center font-40"
            style={{ paddingTop: "150px" }}
          >
            <header>NOUVEAUTES</header>
          </div>
          <div className="carousel-container radius-20">
            <div className="carousel-inner">
              <div className="track">
                {products.map((product) => (
                  <Carouselitem key={product._id} product={product} />
                ))}
              </div>
            </div>
            <div className="navButton">
              <button className="prev">
                <i className="material-icons">keyboard_arrow_left</i>
              </button>
              <button className="next">
                <i className="material-icons">keyboard_arrow_right</i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
