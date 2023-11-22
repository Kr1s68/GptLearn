import React, { useState, useEffect, useRef } from "react";
import "../SignUp/SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function SignUp() {
  const [transformText, setTransformText] = React.useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signup, githubSignin, facebookSignin, googleSignin } = useAuth();
  const nav = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Axios.post(`https://gptlearn-api.onrender.com/users/`, {
        username: name,
        email: email,
        image:
          "https://img001.prntscr.com/file/img001/X0RdUe_PSJG45Sad6PzLBA.png",
      }).then((response) => console.log(response.data));
      await signup(emailRef.current.value, passwordRef.current.value);
      nav("/courses");
    } catch {
      console.log("Failed to create account.");
    }
  }

  async function handleGithubLogin(event) {
    event.preventDefault();

    await githubSignin();
    nav("/courses");
  }

  async function handleFacebookLogin(event) {
    event.preventDefault();

    await facebookSignin();
  }

  async function handleGoogleLogin(event) {
    event.preventDefault();

    await googleSignin();
    nav("/courses");
  }

  useEffect(() => {
    document.documentElement.addEventListener("mousemove", followCursor);
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 3;
    let posY = event.clientY - window.innerWidth / 6;
    setTransformText(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginTop: "-35%",
            marginBottom: "12%",
            fontSize: "2rem",
            fontWeight: "700",
            color: "#c678dd",
          }}
        >
          SIGN UP
        </div>
        <div className="inputDiv">
          <label className="inputLabel">Full Name:</label>
          <input
            type="text"
            className="glowing-border"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
            required
          ></input>
        </div>
        <div className="inputDiv">
          <label className="inputLabel">Email:</label>
          <input
            type="email"
            className="glowing-border"
            placeholder="iamauser@mail.dev"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            required
          ></input>
        </div>
        <div className="inputDiv">
          <label className="inputLabel">Password:</label>
          <input
            type="password"
            className="glowing-border"
            placeholder="DeFF1n4telyUncR4CKa8le"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
            required
          ></input>
        </div>

        <button type="submit">Sign Up</button>
        <label style={{ fontSize: "1.3rem", marginBlock: "9%" }}>Or</label>
        <div className="loginOptions">
          <i
            className="fa-brands fa-github fa-4x icon"
            onClick={handleGithubLogin}
          ></i>
          <i
            className="fa-brands fa-facebook fa-4x icon"
            onClick={handleFacebookLogin}
          ></i>
          <i
            className="fa-brands fa-google fa-4x icon"
            onClick={handleGoogleLogin}
          ></i>
        </div>
      </form>
      <pre
        className="sideLabelAnimation glitch"
        style={{ transform: transformText }}
      >
        <span style={{ color: "#E06c75" }}>user</span>:{" "}
        <span style={{ color: "#e5c07b" }}>{"{"}</span> <br></br>
        {"    "}
        <span style={{ color: "#E06c75" }}>fullName</span>:{" "}
        <span style={{ color: "#98c379" }}>{`"${name}"`}</span>,{"    "}
        <br></br>
        {"    "}
        <span style={{ color: "#E06c75" }}>email</span>:{" "}
        <span style={{ color: "#98c379" }}>{`"${email}"`}</span>,{"    "}
        <br></br>
        {"    "}
        <span style={{ color: "#E06c75" }}>password</span>:{" "}
        <span style={{ color: "#98c379" }}>{`"${password.replace(
          /[\w\d\W]/g,
          "*"
        )}"`}</span>
        ,<br></br>
        <span style={{ color: "#e5c07b" }}>{"}"}</span>
      </pre>
    </div>
  );
}
