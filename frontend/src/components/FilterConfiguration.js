import React from "react";

export default function FilterConfiguration() {
  return (
    <aside
      class="width-full displaywhenmobile col-lg-3 whitebackground col-sm-6 d-none d-lg-block"
      style={{
        maxWidth: "450px",
        margin: "auto",
        padding: "30px",
        borderRadius: "7px",
        marginTop: "-15px",
      }}
    >
      <div className="cardd">
        <article className="filter-group">
          <header className="cardd-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside1"
            >
              <i className="icon-control fa fa-chevron-down"></i> Categories
            </a>
          </header>
          <div className="collapse show" id="collapse_aside1">
            <div className="cardd-body">
              <ul className="list-menu">
                <li>
                  <a href="#">Electronics </a>
                </li>
                <li>
                  <a href="#">Watches </a>
                </li>
                <li>
                  <a href="#">Cinema </a>
                </li>
                <li>
                  <a href="#">Clothes </a>
                </li>
                <li>
                  <a href="#">Home items </a>
                </li>
                <li>
                  <a href="#">Smartwatches </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="cardd-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
            >
              <i className="icon-control fa fa-chevron-down"></i> Price
            </a>
          </header>
          <div className="collapse show" id="collapse_aside2">
            <div className="cardd-body">
              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label">Min</label>
                  <input
                    className="form-control"
                    placeholder="$0"
                    type="number"
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Max</label>
                  <input
                    className="form-control"
                    placeholder="$1,0000"
                    type="number"
                  />
                </div>
              </div>
              <button className="btn btn-light w-100" type="button">
                Apply
              </button>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="cardd-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i> Size
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="cardd-body">
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XS </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> SM </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> LG </span>
              </label>
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XL </span>
              </label>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="cardd-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside4"
            >
              <i className="icon-control fa fa-chevron-down"></i> Brand type
            </a>
          </header>
          <div className="collapse show" id="collapse_aside4">
            <div className="cardd-body">
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked
                  name="choose_x"
                />
                <span className="form-check-label"> Samsung </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked
                  name="choose_x"
                />
                <span className="form-check-label"> Huawei </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="choose_x"
                />
                <span className="form-check-label"> Tesla model </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="choose_x"
                />
                <span className="form-check-label"> Oneplus </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="choose_x"
                />
                <span className="form-check-label"> Panasonic </span>
              </label>
            </div>
          </div>
        </article>
        <article className="filter-group">
          <header className="cardd-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside5"
            >
              <i className="icon-control fa fa-chevron-down"></i> Colors
            </a>
          </header>
          <div className="collapse show" id="collapse_aside5">
            <div className="cardd-body">
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="check_opt_a"
                  checked=""
                />
                <span className="form-check-label"> Lightblue </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="check_opt_a"
                />
                <span className="form-check-label"> Orange </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="check_opt_a"
                />
                <span className="form-check-label"> Darkblue </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="check_opt_a"
                />
                <span className="form-check-label"> Silver </span>
              </label>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
}
