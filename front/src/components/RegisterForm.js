import React from "react";
import Wilayas from "./Wilaya";

export default function RegisterForm() {
  return (
    <div>
      <div className="loginForm">
        <header className="font-cabin font-bold font-30 mrgnlft-5">
          S’INSCRIRE
        </header>
        <div className="input_form shadowForMainSquareType">
          <div className="form-group attributForm pdngbtm-10">
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
          <div className="form-group attributForm pdngbtm-10">
            <label
              for="exampleInputEmail1"
              className="font-bold font-cabin font-18"
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              className="InputField font-cabin font-10"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group attributForm pdngbtm-10">
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
          <div className="form-group attributForm pdngbtm-10">
            <label
              for="exampleInputPassword1"
              className="font-bold font-cabin font-18"
            >
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              className="InputField font-cabin font-10"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group attributForm pdngbtm-10">
            <label
              for="exampleInputPassword1"
              className="font-bold font-cabin font-18"
            >
              Wilaya
            </label>
            <select
              className="InputField font-cabin font-10"
              id="exampleInputPassword1"
            >
              {Wilayas.leswilayas.map((wilaya) => (
                <option>{wilaya}</option>
              ))}
            </select>
          </div>
          <div className="form-group attributForm pdngbtm-10">
            <button
              type="submit"
              className="font-cabin font-18 radius-25 loginOrRegisterButton width-full"
            >
              S’inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
