import React, { useState, useRef } from "react";
import "../Exam/Exam.css";
import NavBar from "../NavBar/NavBar";
import "../CoursePage/prism.css";
import axios from "axios";
import { toHtml } from "@fortawesome/fontawesome-svg-core";
import { useNav } from "../../Contexts/NavContext";

export default function Exam({ Content, Subject, Language }) {
  console.log(Content);

  const [question, setQuestion] =
    useState(`Your question will be displayed here.<br>
  Try to solve it yourself before you get help.
  `);
  const [solution, setSolution] = useState();
  const [userSolution, setUserSolution] = useState();
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState({
    question: false,
    solution: false,
    response: false,
  });
  const { replaceIdentifiersWithHTML } = useNav();

  let params;
  try {
    params = new URLSearchParams([
      ["question", question],
      ["solution", userSolution],
    ]);
  } catch {}

  const getResponse = async () => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      response: true,
    }));
    await axios
      .get(`https://gptlearn-api.onrender.com/gradeSolution`, { params })
      .then((response) => {
        setResponse(replaceNewlinesWithBr(response.data).split("```"));
      });
    setLoading((prevLoading) => ({
      ...prevLoading,
      response: false,
    }));
  };

  function replaceNewlinesWithBr(inputString) {
    return inputString.replace(/\n/g, "<br>");
  }

  const getQuestion = async () => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      question: true,
    }));
    await axios
      .get(
        `https://gptlearn-api.onrender.com/getQuestion?message=${encodeURIComponent(
          Content + "in" + Language
        )}`
      )
      .then((response) =>
        setQuestion(replaceNewlinesWithBr(response.data).split("```"))
      );
    setLoading((prevLoading) => ({
      ...prevLoading,
      question: false,
    }));
  };

  const getSolution = async () => {
    setLoading((prevLoading) => ({
      ...prevLoading,
      solution: true,
    }));
    await axios
      .get(
        `https://gptlearn-api.onrender.com/getSolution?message=${encodeURIComponent(
          question + "in" + Language
        )}`
      )
      .then((response) =>
        setSolution(replaceNewlinesWithBr(response.data).split("```"))
      );
    setLoading((prevLoading) => ({
      ...prevLoading,
      solution: false,
    }));
  };

  function toHTML(text) {
    return { __html: text };
  }

  function Question({ text }) {
    return (
      <p>
        <div dangerouslySetInnerHTML={toHTML(text)}></div>
      </p>
    );
  }

  function Text({ text }) {
    return (
      <p>
        <div dangerouslySetInnerHTML={toHTML(text)}></div>
      </p>
    );
  }

  function Solution({ text }) {
    let modifiedHTML = replaceIdentifiersWithHTML(text);

    return <div dangerouslySetInnerHTML={modifiedHTML}></div>;
  }

  console.log(solution);

  return (
    <>
      <NavBar position={"fixed"} />
      <div className="courseWrapper">
        <h1>Welcome to the {Subject} Self Examination</h1>
        <div className="unitPoint">
          <p>
            <strong>
              Once you have finished a course, you can test you knowlege here.
            </strong>
            <br></br>
            <button style={{ marginTop: "3%" }} onClick={getQuestion}>
              Get a Question
            </button>
          </p>
          <div>
            <p>
              <strong>Question:</strong>{" "}
            </p>
            <Question text={question} />
            <div
              className="dot-falling"
              style={{
                display: loading.question ? "block" : "none",
                marginLeft: "2.5%",
              }}
            ></div>
            <p>
              <button onClick={getSolution}>Get Solution</button>
              <p> </p>
              <strong>Solution:</strong>{" "}
              <div
                className="dot-falling"
                style={{
                  display: loading.solution ? "block" : "none",
                  marginLeft: "2.5%",
                }}
              ></div>
              {solution &&
                solution.map((Item, Id) => {
                  return Id % 2 === 1 ? (
                    <pre style={{ color: "#c1f2ed" }}>
                      <code>
                        <Solution text={Item} />
                      </code>
                    </pre>
                  ) : (
                    <Text text={Item} />
                  );
                })}
            </p>
          </div>
        </div>
        <div className="unitPoint">
          <h2 className="unitTitle">
            Here you can check if your solution is correct:{" "}
          </h2>
          <div
            className="solDiv"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {" "}
            <textarea
              className="inputArea"
              value={userSolution}
              onChange={(e) => setUserSolution(e.target.value)}
            ></textarea>
            <button onClick={getResponse}>Check Solution</button>
            <div
              className="dot-falling"
              style={{
                display: loading.response ? "block" : "none",
                marginLeft: "2.5%",
              }}
            ></div>
            {response &&
              response.map((Item, Id) => {
                return Id % 2 === 1 ? (
                  <pre style={{ color: "#c1f2ed" }}>
                    <code>
                      <Solution text={Item} />
                    </code>
                  </pre>
                ) : (
                  <Text text={Item} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
