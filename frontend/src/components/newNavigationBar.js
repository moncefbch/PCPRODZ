import React from "react";

export default function newNavigationBar() {
  return (
    <div className="section-header">
      <section className="header-main bg-white">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-2 col-sm-4 col-4">
              <a href="/" className="navbar-brand">
                <img className="logo" height="40" src="images/logo.svg" />
              </a>
            </div>
            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="float-end">
                <a href="#" className="btn btn-light">
                  <i className="fa fa-user"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">
                    Sign in{" "}
                  </span>
                </a>
                <a href="#" className="btn btn-light">
                  <i className="fa fa-heart"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline-block">
                    Wishlist
                  </span>
                </a>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvas_cart"
                  className="btn btn-light"
                >
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="ms-1">My cart </span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <form action="#" className="">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    style={{ width: "100%" }}
                    placeholder="Search"
                  />
                  <select className="form-select">
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <button className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar_main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link ps-0" href="#">
                  {" "}
                  Categories{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hot offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gift boxes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu name
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <a className="dropdown-item" href="#">
                      Submenu one{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="#">
                      Submenu two
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="#">
                      Submenu three
                    </a>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
