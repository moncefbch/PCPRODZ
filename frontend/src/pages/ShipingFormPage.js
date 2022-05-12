import React from "react";

export default function ShipingFormPage() {
  return (
    <section className="padding-y bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <article className="cardd">
              <div className="cardd-body">
                <h5 className="cardd-title">Contact info</h5>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      value="+998"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                <label className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label">
                    Keep me up to date on news
                  </span>
                </label>
                <hr className="my-4" />
                <h5 className="cardd-title">Shipping info</h5>
                <div className="row mb-3">
                  <div className="col-lg-4 mb-3">
                    <div className="box box-check">
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="dostavka"
                          checked
                        />
                        <b className="border-oncheck"></b>
                        <span className="form-check-label">
                          Express delivery <br />
                          <small className="text-muted">
                            3-4 days via Fedex{" "}
                          </small>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="box box-check">
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="dostavka"
                        />
                        <b className="border-oncheck"></b>
                        <span className="form-check-label">
                          Post office <br />
                          <small className="text-muted">
                            20-30 days via post
                          </small>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="box box-check">
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="dostavka"
                        />
                        <b className="border-oncheck"></b>
                        <span className="form-check-label">
                          Self pick-up <br />
                          <small className="text-muted">
                            {" "}
                            Come to our shop{" "}
                          </small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8 mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <label className="form-label">City*</label>
                    <select
                      className="form-select"
                      id="city*"
                      aria-label="City*"
                    >
                      <option value="1">New York</option>
                      <option value="2">Moscow</option>
                      <option value="3">Samarqand</option>
                    </select>
                  </div>
                  <div className="col-sm-4 col-6 mb-3">
                    <label className="form-label">House</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="col-sm-4 col-6 mb-3">
                    <label className="form-label">Postal code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-sm-4 col-6 mb-3">
                    <label className="form-label">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <label className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label"> Save this address </span>
                </label>
                <button className="btn btn-primary">Continue</button>
                <button className="btn btn-light">Cancel</button>
              </div>
            </article>
          </div>
          <aside className="col-lg-4">
            <article className="cardd">
              <div className="cardd-body">
                <h5 className="cardd-title">Summary</h5>
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-end">$1403.97</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-end text-danger">- $60.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Shipping cost:</dt>
                  <dd className="text-end">+ $14.00</dd>
                </dl>
                <hr />
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-end">
                    <strong className="text-dark">$1357.97</strong>
                  </dd>
                </dl>
                <div className="input-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    name="lorem"
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary">Apply</button>
                </div>
                <hr />
                <h5 className="mb-4">Items in cart</h5>
                <div className="itemside align-items-center mb-4">
                  <div className="aside">
                    <b className="badge bg-secondary rounded-pill">2</b>
                    <img
                      src="bootstrap5-ecommerce/images/items/2.jpg"
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="info">
                    <a href="#" className="title">
                      Canon Cmera EOS, 10x zoom
                    </a>
                    <div className="price text-muted">Total: $12.99</div>
                  </div>
                </div>
                <div className="itemside align-items-center mb-4">
                  <div className="aside">
                    <b className="badge bg-secondary rounded-pill">2</b>
                    <img
                      src="bootstrap5-ecommerce/images/items/8.jpg"
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="info">
                    <a href="#" className="title">
                      Leather Wallet for Men Original
                    </a>
                    <div className="price text-muted">Total: $12.99</div>
                  </div>
                </div>
                <div className="itemside align-items-center mb-4">
                  <div className="aside">
                    <b className="badge bg-secondary rounded-pill">2</b>
                    <img
                      src="bootstrap5-ecommerce/images/items/9.jpg"
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="info">
                    <a href="#" className="title">
                      Product name goes here
                    </a>
                    <div className="price text-muted">Total: $12.99</div>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
