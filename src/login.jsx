import React from "react";

function Login() {
  return (
    <div>
      <form>
        <p>
          <strong>Please login below to access</strong>
        </p>
        <table>
          <tr>
            <td>
              <label htmlFor="username" className="user">
                Username
              </label>
            </td>
            <td>:</td>
            <td>
              <input type="text" className="user" />
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
              <input type="password" className="pwd" />
            </td>
          </tr>
          <button>Login</button>
        </table>
      </form>
      <p>
        Don't have an account?
        <a href=""> Signup </a>here
      </p>
      <form>
        <table>
          <tr>
            <td>
              <label htmlFor="email">Enter Your Email</label>
            </td>
            <td>:</td>
            <td>
              <input type="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Create Your Username</label>
            </td>
            <td>:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Create Your Own Password</label>
            </td>
            <td>:</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cpassword">Confrim Your Password</label>
            </td>
            <td>:</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="DOB">Date Of Birth</label>
            </td>
            <td>:</td>
            <td>
              <input type="Date" />
            </td>
          </tr>
        </table>
      </form>
      <button type="submit">Create Account</button>
    </div>
  );
}

export default Login;
