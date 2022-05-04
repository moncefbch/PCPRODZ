import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { edit } from "../actions/userActions";

export default function ProfileEditInformations(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [name, setName] = useState(userInfo.name);
  const [lastname, setLastName] = useState(userInfo.lastname);
  const [phone, setPhone] = useState(userInfo.phone);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(edit(userInfo._id, name, lastname, phone));
    props.history.push("/profile");
    window.location.reload(false);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="mrgnlft-30">
        <div class="d-flex flex-row">
          <div class="p-2">
            <header class="font-cabin font-20 pdgtp-5 font-bold">
              VOTRE COMPTE
            </header>
          </div>
          <div class="p-2">
            <header class="font-cabin font-20 pdgtp-5 font-bold">{">"}</header>
          </div>
          <div class="p-2">
            <header
              class="font-cabin font-15 pdgtp-5 font-bold"
              style={{ paddingTop: "9px" }}
            >
              INFORMATIONS PERSONNELLES
            </header>
          </div>
        </div>
      </div>
      <hr className="width-full"></hr>
      <div class="row mrgn-30 pdgtp-35">
        <div class="col">
          {/*text input with bottom border only with bootstrap */}
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="text"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              placeholder="Nom"
              value={name}
              onClick={(e) => (e.target.value = null)}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div class="col">
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="text"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Prénom"
              value={lastname}
              onClick={(e) => (e.target.value = null)}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div class="row mrgn-30 pdgtp-35">
        <div class="col">
          {/*text input with bottom border only with bootstrap */}
          <div class="form-group" style={{ width: "85%" }}>
            <header class="form-control blackplaceholder noborders font-cabin font-20 pdgtp-5">
              {"Email : " + userInfo.email}
            </header>
          </div>
        </div>
        <div class="col">
          <div class="form-group" style={{ width: "85%" }}>
            <input
              type="phone"
              class="form-control blackplaceholder font-cabin font-20 pdgtp-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Num"
              value={phone}
              onClick={(e) => (e.target.value = null)}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
          </div>
        </div>
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
