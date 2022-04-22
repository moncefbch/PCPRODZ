import React from "react";

export default function ProfileInformations() {
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
                    <header class="font-cabin font-15 pdgtp-5">ADRESSE</header>
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
  );
}
