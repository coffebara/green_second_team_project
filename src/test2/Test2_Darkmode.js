import React from "react";


export default  function Test2_Darkmode() {
  return (
    <div className="main2">
      <p className="sign2" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit" align="center">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

