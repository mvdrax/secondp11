import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginApi } from "../../api/apiReq";
import { setToken } from "../../actions/actions"

const SignIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await loginApi({ email, password });
      if (response.status === 200) {
        console.log("oui")
        
        const token = response.body.token;
        console.log('Token:', token);

        dispatch(setToken(token));
        
        
        navigate("profile");
        console.log("ouii")

      } else {
        alert('Erreur lors du processus d/authentification, veuillez saisir vos identifiants à nouveau');
      }
    } catch (error) {
      setError('Erreur de connexion', error);
    }
  }
  

  


    return (
    <div>
    <Header/>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={login}>
          <div className="input-wrapper">
            <label for="email">Username</label
            ><input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
            {error && <div className="errorLogin">{error}</div>}
          </div>
          
          
          <button className="sign-in-button">Sign In</button> 
        </form>
      </section>
    </main>
    <Footer />
    </div>
);

}
  
  export default SignIn;