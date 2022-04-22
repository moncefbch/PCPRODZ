import React from "react";
import ProfileEditInformations from "../components/ProfileEditInformations";
import ProfileInformations from "../components/ProfileInformations";

export default function ProfilePage() {
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
          <header class="font-cabin font-20 pdgtp-5 font-bold">
            Se deconnecter
          </header>
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
