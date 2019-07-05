import React from "react";
import './index.css';

//ADD CHILD PROPS LINE JUST ABOVE FINAL CLOSING DIV

const LoginForm = props => (

 <div className="w3-container w3-pale-blue" id="signinblock">

<h2>Sign In</h2>
  <p>Animal Tracks... neighbors helping neighbors.</p>

  <div className="w3-container" id="signInForm">
    <form>
        <input placeholder="Your email address" type="email" name="useremail" className="loginputA" />
        <input placeholder="Your password" type="password" name="userpassword" className="loginputA" />
        <button className="w3-hover-light-green" type="submit">Sign In</button>
    </form>
  </div>
</div>

);

export default LoginForm;

