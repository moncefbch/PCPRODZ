import React from "react";

export default function ProfileEditPassword() {
  return (
    <div>
      <div className="mrgnlft-30">
        <header class="font-cabin font-20 pdgtp-5 font-bold">
          MODIFIER VOTRE MOT DE PASSE
        </header>
      </div>
      <hr className="width-full"></hr>
      <div class="form-group width-300 pdng-50">
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-15"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Mot de passe actuel"
        ></input>
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-50"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nouveau mot de passe"
        ></input>
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-50"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Saisissez à nouveau le mot de passe"
        ></input>
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
