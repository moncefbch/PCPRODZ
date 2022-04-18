import React from "react";
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
            <a className="notextdecoration labeloflink active" href="/">
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
      <div className="box overlay">
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span
            className="input-group-text border-1"
            id="search-addon"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <a href="/">
              <i className="fa fa-search ms-auto whitebackground"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
