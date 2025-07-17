import React from 'react'

function Signup() {
  return (
    <div>
        <form>
        <table>
          <tr>
            <td>
              <label htmlFor="email">Enter Your Email</label>
            </td>
            <td>:</td>
            <td>
              <input type="email" placeholder="Email goes here" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="uname">Create Your Username</label>
            </td>
            <td>:</td>
            <td>
              <input type="text" placeholder="Username goes here" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="pwd">Create Your Own Password</label>
            </td>
            <td>:</td>
            <td>
              <input type="password" placeholder="password" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cpassword">Confirm Your Password</label>
            </td>
            <td>:</td>
            <td>
              <input type="password" placeholder="Confirm your password" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="DOB">Date Of Birth</label>
            </td>
            <td>:</td>
            <td>
              <input type="Date" placeholder="Select your DOB" />
            </td>
          </tr>
        </table>
      </form>
      <button type="submit">Create Account</button>
    </div>
  )
}

export default Signup