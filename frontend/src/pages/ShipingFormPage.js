import React, {useState} from "react";
import Wilayas from "../components/Wilaya";
import {useDispatch, useSelector} from "react-redux";
import {saveShippingAddress} from "../actions/cartActions";

export default function ShipingFormPage(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const cart = useSelector((state) => state.cart);
  const {shippingAddress} = cart;
  if (!userInfo) {
    props.history.push("/login");
  }
  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [wilaya, setWilaya] = useState(shippingAddress.wilaya);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [firstName, setFirstName] = useState(userInfo.name);
  const [lastName, setLastName] = useState(userInfo.lastname);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        firstName,
        lastName,
        address,
        phone,
        postalCode,
        wilaya,
      })
    );
    props.history.push("/placeorder");
  };
  // rewrite the code that when the user fills first and last name it will be concatenated in the full name
  return (
    <div className="row">
      <div className="col-md-8 mb-4">
        <div className="cardd mb-4">
          <div className="cardd-header py-3">
            <h5 className="mb-0">Shipping Address</h5>
          </div>
          <div className="cardd-body">
            <form className="form" onSubmit={submitHandler}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form7Example1"
                      placeholder="first name"
                      value={firstName}
                      className="InputField font-cabin font-10"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <label className="form-label" for="form7Example1"></label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form7Example2"
                      className="InputField font-cabin font-10"
                      placeholder="last name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <label className="form-label" for="form7Example2"></label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <select
                  className="InputField font-cabin font-10"
                  id="exampleInputPassword1"
                  onChange={(e) => setWilaya(e.target.value)}
                  value={wilaya}
                  required
                >
                  {Wilayas.leswilayas.map((wilaya) => (
                    <option value={wilaya}>{wilaya}</option>
                  ))}
                </select>
                <label className="form-label" for="form7Example3"></label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form7Example4"
                  className="InputField font-cabin font-10"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="form-label" for="form7Example4"></label>
              </div>
              <div className="form-outline mb-4">
                <input
                  // grey overlay
                  type="email"
                  id="form7Example5"
                  placeholder="Email"
                  value={userInfo.email}
                  className="InputField font-cabin font-10"
                />
                <label className="form-label" for="form7Example5"></label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="number"
                  placeholder="Phone"
                  id="form7Example6"
                  className="InputField font-cabin font-10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="form-label" for="form7Example6"></label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="code"
                  placeholder="Code postal"
                  id="form7Example6"
                  className="InputField font-cabin font-10"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
                <label className="form-label" for="form7Example7"></label>
              </div>

              <div className="form-check d-flex justify-content-center mb-2">
                <div className="form-group attributForm pdngbtm-50">
                  <button
                    type="submit"
                    className="font-cabin font-18 radius-25 loginOrRegisterButton width-full"
                    //on submit
                  >
                    Save Shipping Address
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="cardd mb-4">
          <div className="cardd-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="cardd-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>$53.98</strong>
                </span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Make purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
