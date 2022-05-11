import React from "react";

export default function Commande() {
  const arr = [0, 0, 0];
  return (
    <div className="pdng-15">
      <header className="font-cabin font-bold font-30 mrgnlft-15">
        Commandes
      </header>

      <div className="simpleBorder mrgn-30">
        <div className="width-full pdng-20">
          <div>
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
          </div>
          <div className="pdgtp-50">
            <header className="font-bold font-20 font-cabin pdgtp-5">
              {"Produits :"}
            </header>
          </div>
          <div className="pdgtp-35">
            <table class="table table-bordered simpleBorder">
              <thead>
                <tr>
                  <th
                    className="font-normal"
                    style={{ width: "50%" }}
                    scope="col"
                  >
                    Nom du produit
                  </th>
                  <th className="font-normal" scope="col">
                    Prix unité
                  </th>
                  <th className="font-normal" scope="col">
                    Qantité
                  </th>
                  <th className="font-normal" scope="col">
                    Total
                  </th>
                </tr>
                {arr.map((tableTr) => (
                  <tr>
                    <th className="font-normal" scope="col">
                      {"."}
                    </th>
                    <th className="font-normal" scope="col">
                      {"."}
                    </th>
                    <th className="font-normal" scope="col">
                      {"."}
                    </th>
                    <th className="font-normal" scope="col">
                      {"."}
                    </th>
                  </tr>
                ))}
                <th style={{ display: "hidden" }} scope="col"></th>
                <th style={{ display: "hidden" }} scope="col"></th>
                <th style={{ display: "hidden" }} scope="col"></th>
                <th colspan="1">data1</th>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
