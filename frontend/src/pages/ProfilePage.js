import React from "react";
import ProfileEditInformations from "../components/ProfileEditInformations";
import ProfileInformations from "../components/ProfileInformations";
import { useDispatch } from "react-redux";
import { signout } from "../actions/userActions";
import { Link } from "react-router-dom";

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
          paddingBottom: "10px",
          height: "220px",
          marginBottom: "40px",
        }}
      >
        <div>
          <img
            src="/images/userWhite.png"
            alt="carticon"
            className="linkicon mrgnrgt-50"
          />
          <a>Mon profile PCPRODZ</a>
        </div>
        <hr className="width-full"></hr>
        <div>
          <img
            src="/images/orders.png"
            alt="carticon"
            className="linkicon mrgnrgt-50"
          />
          <a>Vos Commandes</a>
        </div>
        <hr className="width-full"></hr>
        <div className="align-center">
          <Link
            className="notextdecoration"
            style={{ color: "black" }}
            to="#signout"
            onClick={signoutHandler}
          >
            <header class="font-cabin font-20 pdgtp-5 font-bold">
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
          //<ProfileEditInformations />
          <ProfileInformations />
        }
      </div>
    </div>
  );
}
