import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import ErrorMessageBox from './ErrorMessageBox';
import LoadingBox from './LoadingBox';


export default function LoginForm(props) {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div className="loginForm">
      <header className="font-cabin font-bold font-30 mrgnlft-5">
        
        CONNECTEZ-VOUS
      </header>
     <div className="input_form shadowForMainSquareType" >
     {loading && <LoadingBox></LoadingBox>}
     {error && <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>}
       <form className="form" onSubmit={submitHandler}>
        <div className="form-group attributForm pdngbtm-50" >
        
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
            onChange={(e)=>setEmail(e.target.value)}
            // onchange 
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
            // on change 
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-group attributForm pdngbtm-50">
          <button
            type="submit"
            className="font-cabin font-18 radius-25 loginOrRegisterButton width-full"
            //on submit 
          >
            Se connecter
          </button>
        </div>
        <div className="align-center">
          <header className="font-cabin font-bold font-18">
            Nouveau sur PCPRODZ ?{" "} 
            <Link className="font-cabin font-18" to={`/register`}>
              Créer un compte
            </Link>
          </header>
        </div>
        </form>
      </div>

    </div>
  );
}
