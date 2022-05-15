import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategories } from "../actions/ProductAction";
import LoadingBox from "./LoadingBox";
import ErrorMessageBox from "./ErrorMessageBox";
import { Link } from "react-router-dom";

export default function SecondaryNavigationBar() {
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  // toggle the dropdown menu
  const [toggle, setToggle] = useState(false);
  const toggleDropdown = () => {
    setToggle(!toggle);
  };
  // close the dropdown menu
  const closeDropdown = () => {
    setToggle(false);
  };
  // render the dropdown menu ,,,,

  return (
    <div className="secondNavBar" style={{ backgroundColor: "#3c3c3c" }}>
      <div className="dropdown pdngrgt-20">
        <button className="dropbtn" onClick={toggleDropdown}>
          <img src="/images/dropdownIcon.svg" alt="dropdownicon" />
        </button>
        <div className="dropdown-content">
          <header className="font-cabin font-30 mrgnlft-5 cathegoriesHeader">
            Cathegories
          </header>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <ErrorMessageBox variant="danger">
              {errorCategories}
            </ErrorMessageBox>
          ) : (
            categories.map((c) => (
              <li key={c}>
                <Link
                  to={`/search=category=${c}`}
                  className="font-cabin font-20 mrgnlft-5 onecathegorie"
                >
                  {c}
                </Link>
              </li>
            ))
          )}
        </div>
      </div>

      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="#newproducts"
      >
        Nouveautés{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="#footer"
      >
        Contacte{" "}
      </a>
      <a
        className="notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="#pcprodzinformationss"
      >
        Notre Place{" "}
      </a>

      <a
        className="hideWhenPhone notextdecoration font-cabin font-20 mrgnrgt-30 whiteColor"
        href="#footer"
      >
        Nous Contacter{" "}
      </a>
    </div>
  );
}
