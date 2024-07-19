import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const url = "/auth/login";
    POST(url, { email, password }).then((data) => {
      console.log(data);
      localStorage.setItem(TOKEN_KEY, data.token);
      alert("HELL YEAH BROTHER");
      nav("/books");
    });
  };

  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-md-6 card">
          <div>
            <h1 className="d-flex justify-content-center"> Log in?</h1>

            <div className="d-flex justify-content-center m-2">
              <input
                className="m-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="m-2"
                placeholder="Password"
                // type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center m-2">
              <button
                className="rounded mx-4"
                onClick={handleLogin}
              >
                Log in!
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
