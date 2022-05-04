import React from "react";
import ProfileEditInformations from "../components/ProfileEditInformations";
import ProfileInformations from "../components/ProfileInformations";
import { useDispatch } from "react-redux";
import { signout } from "../actions/userActions";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileEditPassword from "../components/ProfileEditPassword";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="flex-container" style={{ margin: "3%" }}>
      <div
        className="flex-item-right-30 whitebackground radius-10 mrgnrgt-50"
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          marginBottom: "20px",
          height: "220px",
        }}
      >
        <div>
          <img
            src="/images/userWhite.png"
            alt="carticon"
            className="profilelinkicon mrgnrgt-50"
          />

          <a
            href="/profile/"
            className="mrgnlft-10 notextdecoration blackcolor font-bold font-18"
          >
            Mon profile PCPRODZ
          </a>
        </div>
        <hr className="width-full"></hr>
        <div>
          <img
            src="/images/orders.png"
            alt="carticon"
            className="profilelinkicon mrgnrgt-50"
          />
          <a className="mrgnlft-10 notextdecoration blackcolor font-bold font-18">
            Vos Commandes
          </a>
        </div>
        <hr className="width-full"></hr>
        <div className="align-center">
          <Link
            className="notextdecoration"
            style={{ color: "black" }}
            to="#signout"
            onClick={signoutHandler}
          >
            <header class="font-cabin font-25 pdgtp-5 font-bold">
              Se deconnecter
            </header>
          </Link>
        </div>
      </div>
      <div
        className="flex-item-left-70 whitebackground radius-10 "
        style={{ paddingTop: "15px", paddingBottom: "15px" }}
      >
        {
          //show ProfileInformations component only if the url is /profile
          //otherwise show ProfileEditInformations component
          <Router>
            <Route exact path="/profile" component={ProfileInformations} />
            <Route
              exact
              path="/profile/edit"
              component={ProfileEditInformations}
            />
            <Route
              exact
              path="/profile/password"
              component={ProfileEditPassword}
            />
          </Router>
        }
      </div>
    </div>
  );
}
