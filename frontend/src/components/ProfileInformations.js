import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfileInformations() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <div className="mrgnlft-30">
        <header class="font-cabin font-20 pdgtp-5 font-bold">
          VOTRE COMPTE
        </header>
      </div>
      <hr className="width-full"></hr>

      <div class="row" style={{ margin: "10px" }}>
        <div class="col">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">
                  <div class="mrgnlft-15 d-flex justify-content-between">
                    <header class="font-cabin font-15 pdgtp-15">
                      INFORMATIONS PERSONNELLES
                    </header>
                    <Link to={"/profile/edit"} className="grayonhover">
                      <img
                        alt="edit"
                        width={"35px"}
                        height={"35px"}
                        src="/images/edit.png"
                      ></img>
                    </Link>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <div
                    className="mrgnlft-15"
                    style={{ height: "200px", position: "relative" }}
                  >
                    <header className="font-cabin font-15 pdgtp-5">
                      {"Nom : " + userInfo.name}
                    </header>
                    <header className="font-cabin font-15 pdgtp-5">
                      {"Prenom : " + userInfo.lastname}
                    </header>
                    <header class="form-text text-muted font-cabin pdgtp-5">
                      {"Email : " + userInfo.email}
                    </header>
                    <Link
                      to={"/profile/password"}
                      style={{ position: "absolute", bottom: "0px" }}
                      className="notextdecoration blackcolor font-bold font-18"
                    >
                      MODIFIER LE MOT DE PASSE
                    </Link>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">
                  <div className="mrgnlft-15">
                    <header class="font-cabin font-15 pdgtp-15 pdgbtm-16">
                      ADRESSE
                    </header>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <div
                    className="mrgnlft-15"
                    style={{ height: "200px", position: "relative" }}
                  >
                    <header className="font-cabin font-15 pdgtp-5">
                      {userInfo.wilaya}
                    </header>
                    <a
                      style={{ position: "absolute", bottom: "0px" }}
                      className="notextdecoration blackcolor font-bold font-18"
                    >
                      MODIFIER l’ADRESSE
                    </a>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
