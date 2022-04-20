import React from "react";

export default function LoginForm() {
  return (
    <div className="loginForm">
      <header className="font-cabin font-bold font-30 mrgnlft-5">
        {" "}
        CONNECTEZ-VOUS{" "}
      </header>
      <div className="input_form shadowForMainSquareType">
        <div className="form-group attributForm pdngbtm-50">
          <label
            for="exampleInputEmail1"
            className="font-bold font-cabin font-18"
          >
            Email
          </label>
          <input
            type="email"
            className="InputField font-cabin font-10"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group attributForm pdngbtm-50">
          <label
            for="exampleInputPassword1"
            className="font-bold font-cabin font-18"
          >
            Mot de passe
          </label>
          <input
            type="password"
            className="InputField font-cabin font-10"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group attributForm pdngbtm-50">
          <button
            type="submit"
            className="font-cabin font-18 radius-25 loginOrRegisterButton width-full"
          >
            Se connecter
          </button>
        </div>
        <div className="align-center">
          <header className="font-cabin font-bold font-18">
            Nouveau sur PCPRODZ ?{" "}
            <a className="font-cabin font-18" href="register">
              {" "}
              Créer un compte
            </a>
          </header>
        </div>
      </div>
    </div>
  );
}
