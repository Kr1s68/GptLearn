import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollTop / 100);

  const scrollTo = (query) => {
    document
      .querySelector(query)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const nav = useNavigate();

  useEffect(() => {
    currentUser && nav("/courses");
  }, []);

  return (
    <>
      <div style={{ height: "100%" }} className="home">
        <div className="navElement" id="nav">
          <img
            src="https://i.ibb.co/PrhJJqQ/Studify-Logo1.png"
            alt="Studify-Logo1"
            border="0"
          ></img>
          <button onClick={() => nav("login")}>Log In</button>|
          <button onClick={() => nav("signup")}>Sign Up</button>
        </div>
        <div className="heroBanner">
          <h1 className="mainTagline fadeInRight">
            Your Journey to Software Mastery,{" "}
            <a className="btn">
              <span>G</span>
              <span>u</span>
              <span>i</span>
              <span>d</span>
              <span>e</span>
              <span>d</span>
              <span style={{ marginInline: "2px" }}> </span>
              <span>b</span>
              <span>y</span>
              <span style={{ marginInline: "2px" }}> </span>
              <span>A</span>
              <span>I</span>
              <span>.</span>
            </a>
          </h1>
          <button
            style={{
              marginLeft: "45%",
              marginTop: "23%",
              marginBottom: "12%",
              opacity: scrollTop / 100 > 1.5 ? "0" : "1",
            }}
            className="mainHomeBtn"
            onClick={() => scrollTo("#benefits")}
          >
            Find Out More
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/1483af/hand-cursor.png"
                alt="hand-cursor"
                style={{ rotate: "180deg", marginTop: "12%" }}
                className="pointer"
              />
            </div>
          </button>
          <h2
            className={`secondayTagline ${
              scrollTop / 100 > 1.2 && "fadeInRight"
            }`}
          >
            Discover the superpowers our AI-driven courses bestow upon you!
          </h2>
          <div
            className={`benefitsGrid ${scrollTop / 100 > 1.2 && "fadeInRight"}`}
          >
            <div className="gridItem">
              <h3 style={{ backgroundColor: "#1fa745" }}>
                Real-Time Progress Tracking
              </h3>
              <p>
                Users can monitor their{" "}
                <a style={{ fontWeight: "700", color: "#1fa745" }}>progress</a>,
                track completed lessons, and set personalized goals, all with
                <a
                  style={{
                    fontWeight: "700",
                    color: "#1fa745",
                    marginLeft: "9px",
                  }}
                >
                  AI-driven insights
                </a>{" "}
                for continuous improvement.
              </p>
            </div>
            <div className="gridItem" id="benefits">
              <h3 style={{ backgroundColor: "#1483af" }}>
                Learning Resources Library
              </h3>
              <p>
                Access to a{" "}
                <a
                  style={{
                    fontWeight: "700",
                    color: "#1483af",
                  }}
                >
                  vast library of coding resources
                </a>
                , including textbooks, articles, and documentation, with
                <a
                  style={{
                    fontWeight: "700",
                    color: "#1483af",
                    marginLeft: "9px",
                  }}
                >
                  AI-curated content
                </a>{" "}
                recommendations.
              </p>
            </div>
            <div className="gridItem">
              <h3 style={{ backgroundColor: "rgb(168, 85, 247)" }}>
                Code Debugging Assistance
              </h3>
              <p>
                Integrated code editors with{" "}
                <a
                  style={{
                    fontWeight: "700",
                    color: "rgb(168, 85, 247)",
                  }}
                >
                  AI-powered debugging suggestions
                </a>
                , helping learners identify and{" "}
                <a
                  style={{
                    fontWeight: "700",
                    color: "rgb(168, 85, 247)",
                  }}
                >
                  fix errors more efficiently
                </a>
                .
              </p>
            </div>
            <div className="gridItem">
              <h3 style={{ backgroundColor: "rgb(234, 179, 8)" }}>
                AI-Enhanced Assessments
              </h3>
              <p>
                <a
                  style={{
                    fontWeight: "700",
                    color: "rgb(234, 179, 8)",
                  }}
                >
                  AI-based assessments and quizzes
                </a>{" "}
                that adapt to a user's performance,{" "}
                <a
                  style={{
                    fontWeight: "700",
                    color: "rgb(234, 179, 8)",
                  }}
                >
                  providing targeted feedback
                </a>{" "}
                and improvement suggestions.
              </p>
            </div>
          </div>
          <h2
            style={{ marginTop: "18%" }}
            className={`secondayTagline ${
              scrollTop / 100 > 15 && "fadeInRight"
            }`}
          >
            Here's your path to success:
          </h2>
          <div className={`roadMap ${scrollTop / 100 > 15 && "fadeInRight"}`}>
            <div className="step">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "3rem",
                  color: "rgb(234, 179, 8)",
                  textAlign: "center",
                }}
              >
                Learn
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/EAB308/open-book--v1.png"
                  alt="open-book--v1"
                  style={{ marginBottom: "-3%", marginLeft: "5%" }}
                />
              </h1>
              <p style={{ textAlign: "center" }}>
                Embark on your coding journey and unlock the secrets of software
                development with AI-guided learning.
              </p>
            </div>
            <div className="step">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "3rem",
                  color: "#1483af",
                  textAlign: "center",
                }}
              >
                Build
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/dotty/50/1483af/maintenance.png"
                  alt="open-book--v1"
                  style={{ marginBottom: "-1%", marginLeft: "5%" }}
                />
              </h1>
              <p style={{ textAlign: "center" }}>
                Put your skills to work, create amazing projects, and watch your
                confidence soar as you craft real-world solutions.
              </p>
            </div>
            <div className="step">
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "3rem",
                  color: "#1fa745",
                  textAlign: "center",
                }}
              >
                Get hired
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/1fa745/lawyer.png"
                  alt="open-book--v1"
                  style={{ marginBottom: "-1%", marginLeft: "5%" }}
                />
              </h1>
              <p style={{ textAlign: "center" }}>
                Achieve your dream job with the expertise gained on our platform
                – your gateway to a thriving career in tech!
              </p>
            </div>
          </div>
          <div
            className={`subscription ${scrollTop / 100 > 23 && "fadeInBottom"}`}
          >
            <div className="advertisement">
              {" "}
              <h1>Change Your Life Now</h1>
              <article>
                <p>
                  {" "}
                  Break free from the ordinary and unlock the full potential of
                  your coding journey with{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#1fa745",
                    }}
                  >
                    GPTLearn
                  </a>
                  , the AI-powered online software development learning
                  platform.
                </p>{" "}
                <p>
                  {" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#1fa745",
                    }}
                  >
                    GPTLearn
                  </a>{" "}
                  users are the trailblazers who take action and find their path
                  to success.{" "}
                </p>{" "}
                <p>
                  In this dynamic world, there are those who{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#1483af",
                    }}
                  >
                    seize every opportunity
                  </a>
                  , living with conviction and no regrets. Then, there are those
                  who{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#af1414",
                    }}
                  >
                    hesitate and let transformative chances slip away.
                  </a>{" "}
                  <p>Which path will you choose?</p>
                </p>{" "}
                <p>
                  At{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#1fa745",
                    }}
                  >
                    GPTLearn
                  </a>
                  , we're committed to fostering winners.{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "rgb(168, 85, 247)",
                    }}
                  >
                    For just $50, you'll gain access to a world of possibilities
                  </a>
                  , and as a bonus, new users receive{" "}
                  <a
                    style={{
                      fontWeight: "700",
                      color: "#1483af",
                    }}
                  >
                    2 free courses
                  </a>{" "}
                  – no subscription required.{" "}
                  <p>
                    Don't miss this golden opportunity to level up your skills!
                  </p>
                </p>
              </article>
            </div>
            <div className="joinPortion">
              <h1 style={{ textAlign: "center" }}> Get Access Now </h1>
              <h1 style={{ textAlign: "center" }}>
                <a style={{ color: "#1fa745" }}>$49.99</a>/month
              </h1>
              <p style={{ textAlign: "center" }}>Cancel at any time</p>
              <hr style={{ marginBlock: "7vh" }}></hr>
              <h2 style={{ textAlign: "center", marginBlock: "5%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                <a style={{ color: "#1483af" }}>Custom</a> Learning Platform
              </h2>
              <h2 style={{ textAlign: "center", marginBlock: "10%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                10 Courses <a style={{ color: "#1483af" }}>Powered by AI</a>
              </h2>
              <h2 style={{ textAlign: "center", marginBlock: "10%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                <a style={{ color: "#1483af" }}>4 Projects</a> of Your Choice
              </h2>
              <h2 style={{ textAlign: "center", marginBlock: "10%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                <a style={{ color: "rgb(168, 85, 247)" }}>No Experience</a>{" "}
                Needed
              </h2>
              <h2 style={{ textAlign: "center", marginBlock: "10%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                <a style={{ color: "#1483af" }}>Easy to Learn</a> Content
              </h2>
              <h2 style={{ textAlign: "center", marginBlock: "10%" }}>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/metro/30/1fa745/ok.png"
                  alt="ok"
                  style={{ marginBottom: "-2%", marginRight: "2%" }}
                />
                <a style={{ color: "rgb(175, 20, 20)" }}>No </a>Tutorial Hell
              </h2>
            </div>
          </div>
          <div className="btns">
            <button onClick={() => nav("signup")}>Try For Free</button>
          </div>
        </div>
        <div className="footer">
          <a href="/faqs">FAQ</a>
          <ul>
            <h3>Contact: </h3>
            <li>kboyanov19@outlook.com</li>
            <li>Nikolay Ostrovsky №10, Pernik, Bulgaria</li>
            <li>Görtschach 2a, Krumpendorf, Austria</li>
          </ul>
          <button onClick={() => scrollTo("#nav")}>
            Back to top <a className="arr">↑</a>
          </button>
        </div>
      </div>
    </>
  );
}
