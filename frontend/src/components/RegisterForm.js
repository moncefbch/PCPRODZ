import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";
import Wilayas from "./Wilaya";

export default function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wilaya, setWilaya] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password, wilaya));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <div className="loginForm">
        <div className="input_form shadowForMainSquareType">
          <header
            className="font-cabin font-bold font-25"
            style={{
              marginTop: "-40px",
              marginBottom: "35px",
              marginLeft: "30px",
            }}
          >
            S’INSCRIRE
          </header>
          {loading && <LoadingBox></LoadingBox>}
          {error && <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>}
          <form className="form" onSubmit={submitHandler}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                onChange={(e) => setWilaya(e.target.value)}
                value={wilaya}
                required
              >
                {Wilayas.leswilayas.map((wilaya) => (
                  <option value={wilaya}>{wilaya}</option>
                ))}
              </select>
            </div>
            <div className="form-group attributForm pdngbtm-10">
              <button
                type="submit"
                className="font-cabin font-20 radius-10 btn btn-primary  width-full"
                style={{ padding: "15px", marginTop: "20px" }}
              >
                S’inscrire
              </button>
            </div>
            <div>
              <label />
              <div className="align-center">
                <header className="font-cabin font-bold font-18">
                  Already have an account?{" "}
                  <Link className="font-cabin font-18" to={`/login`}>
                    Sign-In
                  </Link>
                </header>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
