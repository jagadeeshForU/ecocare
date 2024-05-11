import React,{useEffect, useState} from "react";
import Navigation from "../components/Navigation/Navigation";
import "../index.css";
import {auth,app,provider} from "../firebase";
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {useNavigate}from "react-router-dom";


const Login =() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(''); 
    const [value,setValue]=useState('');
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then ((userCredential) => {
            navigate("/")
        })
        .catch((error)=>{
        });
    }
    const googlesignin =() =>{
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        navigate("/")
      })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return(
        <>
<Navigation></Navigation>

<div className="container-login">
<section class="wrapper">
<div class="heading">
<h1 class="text text-large"><strong>Log In</strong></h1>
<p class="text text-normal">New User?<span><a herf="/signup" class="text text-links">Create an account</a></span></p>
</div>
<form onSubmit={signIn}>
    <div class="input-control">
        <input type="email" placeholder="Enter Your email" value={email} onChange={(e)=> setEmail(e.target.value)} class="input-field">
        </input>
    </div>
    <div class="input-control">
        <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} class="input-field">
        </input>
    </div>
    <button type="submit" name="submit" class="input-submit" value="login">Log In</button>
</form>
<button  class="input-submit" value="Sign In" onClick={googlesignin}>Google Log In</button>
</section>

    </div>

        </>
        
    );

};

export default Login;