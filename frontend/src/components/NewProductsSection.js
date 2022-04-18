import React, { useEffect, useState } from "react";
import Carouselitem from "./Carouselitem";
import axios from "axios";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";

export default function NewProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
