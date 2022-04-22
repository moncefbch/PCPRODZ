import React from "react";

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
                    <div className="mrgnlft-15">
                      <header class="font-cabin font-15 pdgtp-5">
                        INFORMATIONS PERSONNELLES
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
                        Nom : keziz
                      </header>
                      <header class="form-text text-muted font-cabin pdgtp-5">
                        Email :
                      </header>

                      <a style={{ position: "absolute", bottom: "0px" }}>
                        MODIFIER LE MOT DE PASSE
                      </a>
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
                      <header class="font-cabin font-15 pdgtp-5">
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
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      </header>
                      <a style={{ position: "absolute", bottom: "0px" }}>
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
    </div>
  );
}
