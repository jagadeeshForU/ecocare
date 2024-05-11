import React,{useState} from "react";
import Navigation from "../components/Navigation/Navigation";
//import Navigation from "../components/Navigation";
import "../index.css";
import {auth,app}from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp =() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');   
    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then ((userCredential) => {
            navigate("/login")
            // Signed in 
            //console.log(userCredential)
            //...
        })
        .catch((error)=>{
            //console.log(error)
        });
    }

    return(
        <>
<Navigation></Navigation>

<div className="container-login">
<section class="wrapper">
<div class="heading">
<h1 class="text text-large"><strong>Register</strong></h1>
<p class="text text-normal">Already a user?<span><a herf="/login" class="text text-links">Log in</a></span></p>
</div>
<form onSubmit={signUp}>
    <div class="input-control">
        <input type="email" placeholder="Enter Your email" value={email} onChange={(e)=> setEmail(e.target.value)} class="input-field">
        </input>
    </div>
    <div class="input-control">
        <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} class="input-field">
        </input>
    </div>
    <button type="submit" name="submit" class="input-submit" value="login">Submit</button>
</form>
</section>
    </div>

        </>
        
    );

};

export default SignUp;