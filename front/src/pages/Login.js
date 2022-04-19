import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return <LoginForm />;
}
/*export default function LoginScreen() {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const submitHandler= (e) =>{
    e.preventDefault();
    // TODO: signin action
  }
  return (
    <div>
     <form className="form" onSubmit={submitHandler}>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <label htmlFor="email">Email adress</label>
        <input type="email" id="email" placeholder="Enter Email" required
        onChange={ (e) =>setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" required
        onChange={ (e) =>setPassword(e.target.value)}
        ></input>
      </div>
      <div>
      <label />
      <button className="primary" type="submit">Login</button> 

      </div>
      <div>
        <label />
        <div>
          Pas inscrit ?{' '} <Link to="/register">Créez un compte</Link>

        </div>
      </div>
     </form>

    </div>


  )
}
*/