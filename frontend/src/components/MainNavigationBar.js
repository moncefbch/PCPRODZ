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
        <a className="notextdecoration" href="/">
          <img src="/images/logo.png" alt="logo" id="logoImg" />
        </a>
        <a className="logoLabel notextdecoration whiteColor" href="/">
          pc pro dz
        </a>
        <ul>
          <li>
            <img
              src="/images/carticon.png"
              alt="carticon"
              className="linkicon"
            />
            <a className="notextdecoration labeloflink active" href="/cart">
              Panier
            </a>
          </li>
          <li>
            <img
              src="/images/accounticon.png"
              alt="accounticon"
              className="linkicon"
            />
            {userInfo ? (
              <div className="dropdown pdngrgt">
                <Link className="notextdecoration labeloflink active" to="#">
                  {userInfo.name}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className="notextdecoration labeloflink active" to="/login">
                Se Connecter
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link
                  className="notextdecoration labeloflink active"
                  to="/admin"
                >
                  Admin
                </Link>
              </div>
            )}
          </li>
          <li>
            <img
              src="/images/languageicon.png"
              alt="languageicon"
              className="linkicon"
            />
            <a className="notextdecoration labeloflink active" href="/">
              Langue
            </a>
          </li>
        </ul>
      </div>
      <SearchBox />
    </div>
  );
}
