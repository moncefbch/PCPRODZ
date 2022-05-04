import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePassword } from "../actions/userActions";
import ErrorMessageBox from "./ErrorMessageBox";
import LoadingBox from "./LoadingBox";

export default function ProfileEditPassword(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const [oldpassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(changePassword(userInfo._id, oldpassword, password));
      props.history.push("/profile");
      window.location.reload(false);
      //need to work on error displaying
    }
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="mrgnlft-30 ">
        <header class="font-cabin font-20 pdgtp-5 font-bold">
          MODIFIER VOTRE MOT DE PASSE
        </header>
      </div>
      <hr className="width-full"></hr>
      <div className="form-group width-300 pdng-50">
        {loading && <LoadingBox></LoadingBox>}
        {error && <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>}
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-15"
          aria-describedby="emailHelp"
          placeholder="Mot de passe actuel"
          onChange={(e) => setOldPassword(e.target.value)}
        ></input>
        <div>{error}</div>
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-50"
          aria-describedby="emailHelp"
          placeholder="Nouveau mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          class="form-control blackplaceholder font-cabin font-20 pdgtp-50"
          aria-describedby="emailHelp"
          placeholder="Saisissez à nouveau le mot de passe"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Link to="/profile">
            <button
              style={{ width: "200px", marginRight: "20px" }}
              className="p-2 font-cabin font-18 radius-25 loginOrRegisterButton "
            >
              Annuler
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
