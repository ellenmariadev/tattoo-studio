import React from "react";
import { useState } from "react";
import HeaderHome from "../../components/Header/HeaderHome";
import Footer from "../../components/Footer/Footer";
import "./Login.css";
import Input from "../../components/Form/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-01">
      <div className="container">
        <HeaderHome />
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">LOGIN</span>

              <div className="wrap-input">
                <Input type="email" className={email !== "" ? "has-val input" : "input"}
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                <span className="focus-input" data-placeholder="E-mail"></span>
              </div>

              <div className="wrap-input">
                {/* <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
                <Input type="password" className={password !== "" ? "has-val input" : "input"}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
               
                <span
                  className="focus-input"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn btn">Confirmar</button>
              </div>

              <div className="text-center">
                <span className="txt1">
                  <a className="txt2" href="#">
                    Esqueceu a senha?
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;