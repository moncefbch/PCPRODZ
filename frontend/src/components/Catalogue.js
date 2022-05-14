import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../actions/ProductAction";
import SearchItem from "./SearchItem";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";
import NewSearchItem from "./NewSearchItem";
import {Link} from "react-router-dom";
export default function Catalogue() {
  const text = "";
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;
  useEffect(() => {
    dispatch(listProducts(text));
  }, [dispatch, text]);
  console.log(products);
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
                style={{color: "black"}}
              >
                <div className="d-flex flex-wrap paddingAuto">
                  <SearchItem key={product._id} product={product} />
                </div>{" "}
              </Link>
              //<NewSearchItem key={product._id} product={product} />
            ))
          )}
        </div>
      ) : (
        <div>3emmer el site ta3ek afrr</div>
      )}
    </div>
  );
}
