import React from "react";

export default function Commandes() {
  const arr = [0, 0, 0];
  return (
    <div className="pdng-15">
      <div className="pdng-15 d-flex justify-content-between">
        <header className="font-cabin font-bold font-30 mrgnlft-15">
          Commandes
        </header>
        <div style={{ width: "300px", height: "35px" }} className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
        </div>
      </div>

      {arr.map((order) => (
        <div className="width-ful mrgn-30 pdng-15 commandPanel bodyBackground">
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Nom d'utilisateur : "}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Numero de telephone :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Wilaya :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Adresse :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-5">
            {"Produits :"}
          </header>
          <header className="font-bold font-20 font-cabin pdgtp-35">
            {"MONTANTS :" + "" + "DA"}
          </header>
          <div className="pdgtp-50">
            <div className="d-flex justify-content-start">
              <small class="form-text font-18 text-muted font-cabin ">
                Status:
              </small>
              <small class="form-text font-18 font-cabin redColor">
                Non traité
              </small>
              {
                <small class="form-text font-18 font-cabin greenColor">
                  traité
                </small>
              }
            </div>
            <div className="d-flex justify-content-start">
              <small class="form-text font-18 text-muted font-cabin ">
                Commande id:
              </small>
              <small class="form-text font-18 blackColor font-cabin ">
                1234567890
              </small>
            </div>
          </div>
          <div className="mrgnrgt-30 mrgnlft-30 d-flex flex-row-reverse">
            <button
              style={{ width: "200px" }}
              type="submit"
              className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton mrgntp-35"
            >
              Enregistrer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
