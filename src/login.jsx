import React from "react";
import Signup from "./Signup";

function Login() {
  return (
    <div>
      <p style={{ textAlign: "left" }}>
        <strong>Please login below to access</strong>
      </p>
      <form>
        <table>
          <tr>
            <td>
              <label htmlFor="username" className="user">
                Username
              </label>
            </td>
            <td>:</td>
            <td>
              <input
                type="text"
                className="user"
                placeholder="Username goes here"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password" className="pwd">
                Password
              </label>
            </td>
            <td>:</td>
            <td>
              <input
                type="password"
                className="pwd"
                placeholder="Password goes here"
              />
            </td>
          </tr>
          <button>Login</button>
        </table>
      </form>
      <p style={{ textAlign: "left" }}>
        Don't have an account?
        <a href="Signup"> Signup </a>here
      </p>
    </div>
  );
}

export default Login;
