import React from "react";
import Axios from "axios";
import "../Course/Course.css";
import { useAuth } from "../../Contexts/AuthContext";

export default function Course({ content, title, id, free, image }) {
  const { currentUser, setUserData, userData } = useAuth();

  const addCourse = async () => {
    await Axios.post(
      `https://gptlearn-api.onrender.com/users/addCourse/${id}`,
      currentUser
    ).then((response) =>
      setUserData((prevUserData) => ({
        ...prevUserData,
        picked_courses: response.data,
      }))
    );
  };

  return (
    <div className="course">
      <img src={image}></img>
      <div
        style={{
          marginInline: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>{title}</h1>
        <div className="description">{content}</div>
      </div>
      <div className="buttonDiv">
        <button
          className={
            parseInt(userData.subscription) === 2
              ? "blue"
              : free
              ? "blue"
              : "disabled"
          }
          onClick={
            parseInt(userData.subscription) === 2
              ? addCourse
              : free
              ? addCourse
              : console.log("Subscribe to Premium")
          }
        >
          LEARN
        </button>
        <button
          className={
            parseInt(userData.subscription) === 2
              ? "green"
              : free
              ? "green"
              : "disabled"
          }
        >
          REVIEW
        </button>
        <button
          className={
            parseInt(userData.subscription) === 2
              ? "pink"
              : free
              ? "pink"
              : "disabled"
          }
        >
          REVIEWS
        </button>
      </div>
    </div>
  );
}
