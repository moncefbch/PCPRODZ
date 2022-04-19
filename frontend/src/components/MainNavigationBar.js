import React from "react";
import SearchBox from "./SearchBox";
export default function MainNavigationBar() {
  return (
    <div className="navcontainer">
      <div className="navigationBar box">
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
            <a className="notextdecoration labeloflink active" href="/">
              Panier
            </a>
          </li>
          <li>
            <img
              src="/images/accounticon.png"
              alt="accounticon"
              className="linkicon"
            />
            <a className="notextdecoration labeloflink active" href="/login">
              Se Connecter
            </a>
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
      <SearchBox></SearchBox>
    </div>
  );
}
