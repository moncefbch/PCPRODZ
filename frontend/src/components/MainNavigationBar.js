import React from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

export default function MainNavigationBar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="navcontainer">
      <div className="navigationBar boxx">
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <img src="/images/dropdownIcon.svg" alt="dropdownicon" />
        </label>
        <Link className="notextdecoration" to="/">
          <img src="/images/logo.png" alt="logo" id="logoImg" />
        </Link>
        <Link className="logoLabel notextdecoration" to="/">
          pc pro dz
        </Link>
        <ul className="navbardropmenu collapse show">
          <li>
            <Link to={"/cart"}>
              <div
                style={{
                  position: "absolute" /**copy this to css */,
                }}
                className=" whiteColor wa7dleclass icon fa-solid fa-cart-shopping font-30 iconsta3nav"
              ></div>
            </Link>
            <Link
              to={"/cart"}
              className="font-cabin whiteColor labeloflink notextdecoration font-25"
              style={{
                marginTop: "100px",
              }}
            >
              Panier
            </Link>
          </li>

          <li>
            {userInfo ? (
              <li className="dropdown">
                <Link to={"/cart"}>
                  <div
                    style={{
                      position: "absolute",
                    }}
                    className=" whiteColor wa7dleclass icon fa-solid fa-user font-30 iconsta3nav"
                  ></div>
                </Link>
                <a
                  className="font-cabin whiteColor labeloflink notextdecoration font-25"
                  style={{
                    marginTop: "100px",
                  }}
                >
                  {userInfo.name}
                </a>
                <ul className="dropdown-content" style={{ zIndex: "1000" }}>
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>

                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <Link to={"/login"}>
                  <div
                    style={{
                      position: "absolute",
                    }}
                    className=" whiteColor wa7dleclass icon fa-solid fa-user font-30 iconsta3nav"
                  ></div>
                </Link>
                <Link
                  to={"/login"}
                  className="font-cabin whiteColor labeloflink notextdecoration font-25"
                  style={{
                    marginTop: "100px",
                  }}
                >
                  Se Connecter
                </Link>
              </li>
            )}
            {userInfo && userInfo.isAdmin && (
              <li>
                <Link to={"/admin"}>
                  <div
                    style={{
                      position: "absolute",
                    }}
                    className=" whiteColor wa7dleclass icon fa-solid fa-gear font-30 iconsta3nav"
                  ></div>
                </Link>
                <Link
                  to={"/admin"}
                  className="font-cabin whiteColor labeloflink notextdecoration font-25"
                  style={{
                    marginTop: "100px",
                  }}
                >
                  PCPRODZ
                </Link>
              </li>
            )}
          </li>
          <li>
            <div className="dezhalfo9 showonlyifmobile">
              <Link to={"/login"}>
                <div
                  style={{
                    position: "absolute",
                  }}
                  className=" whiteColor wa7dleclass icon fa-solid fa-right-from-bracket font-30 iconsta3nav"
                ></div>
              </Link>
              <Link
                className="font-cabin whiteColor labeloflink notextdecoration font-25"
                style={{
                  marginTop: "100px",
                }}
              >
                log out
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <SearchBox />
    </div>
  );
}
