import React from "react";
import { useSelector } from "react-redux";

export default function ProfileEditInformations() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <div className="mrgnlft-30">
        <div class="d-flex flex-row">
          <div class="p-2">
            <header class="font-cabin font-20 pdgtp-5 font-bold">
              VOTRE COMPTE
            </header>
          </div>
          <div class="p-2">
            <header class="font-cabin font-20 pdgtp-5 font-bold">{">"}</header>
          </div>
          <div class="p-2">
            <header
              class="font-cabin font-15 pdgtp-5 font-bold"
              style={{ paddingTop: "9px" }}
            >
              INFORMATIONS PERSONNELLES
            </header>
          </div>
        </div>
      </div>
      <hr className="width-full"></hr>
      <div class="row mrgn-30 pdgtp-35">
        <div class="col">
          {/*text input with bottom border only with bootstrap */}
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="text"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nom"
            ></input>
          </div>
        </div>
        <div class="col">
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="text"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Prénom"
            ></input>
          </div>
        </div>
      </div>
      <div class="row mrgn-30 pdgtp-35">
        <div class="col">
          {/*text input with bottom border only with bootstrap */}
          <div class="form-group" style={{ width: "85%" }}>
            <header class="form-control blackplaceholder noborders font-cabin font-20 pdgtp-5">
              {"Email : " + userInfo.email}
            </header>
          </div>
        </div>
        <div class="col">
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="phone"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Num"
            ></input>
          </div>
        </div>
      </div>

      <div className="pdgtp-150 mrgnrgt-30 mrgnlft-30">
        <div className="d-flex flex-row-reverse">
          <button
            style={{ width: "200px" }}
            type="submit"
            className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton "
          >
            Enregistrer
          </button>
          <button
            style={{ width: "200px", marginRight: "20px" }}
            type="submit"
            className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton "
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
