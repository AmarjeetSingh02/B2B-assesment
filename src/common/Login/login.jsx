import React from "react";
import "./login.css"

export function Login() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header"><h3 className="header1">Login</h3></div>
            <div className="card-body">
              <form className="form-group">
                <label htmlFor="username">UserName</label>
                <input
                  className="form-control my-3"
                  placeholder="plez write your username"
                  name="username"
                  type="text"
                  id="username"
                />
                <label htmlFor="password">Password</label>
                <input
                  className="form-control my-3"
                  placeholder="plez write your password"
                  name="password"
                  type="password"
                  id="password"
                />
                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-6">
        <div className='img' >
            <img src='./images/loginImg.webp' width='195%' height='100%' />
          </div>

        </div>
      </div>
    </div>
  );
}
