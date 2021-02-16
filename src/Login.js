import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            dispatch({
              type: actionType.SET_USER,
              user: result.user,
            });
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="header__logo"
          src="https://www.freelogodesign.org/file/app/client/thumb/efe347c5-3aaa-4bb5-bd80-20b98250f1e3_200x200.png?1604920586213"
          alt="logo"
        />
        <h2>Welocme to Todo App</h2>
        <p>to login click the button</p>
        <button onClick={signIn}>Login with Google</button>
        <p className="ps">please open VPN before you login </p>
      </div>
    </div>
  );
}

export default Login;
