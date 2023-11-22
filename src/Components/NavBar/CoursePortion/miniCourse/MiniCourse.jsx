import React, { useEffect, useState } from "react";
import "../miniCourse/MiniCourse.css";
import Axios from "axios";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MiniCourse({ courseTitle, courseId }) {
  const { currentUser } = useAuth();
  const nav = useNavigate();
  const [courseData, setCourseData] = useState({
    title: "...Loading",
  });

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getData = async (id) => {
    await Axios.get(`https://gptlearn-api.onrender.com/courses/${id}`, {}).then(
      (response) => setCourseData(response.data[0])
    );
  };

  useEffect(() => {
    currentUser && getData(courseId);
  }, [currentUser]);

  const colors = ["e06c75", "98c379", "e5c07b", "61afef", "56b6c2", "c678dd"];
  return (
    <div className="chat" onClick={() => nav(`/course/${courseId}`)}>
      <div className="titleWrapper">
        <p className="title">{courseData.title}</p>{" "}
      </div>
      <img
        width="20"
        height="20"
        src={`https://img.icons8.com/ios/50/${
          colors[randomIntFromInterval(0, 5)]
        }/programming-flag.png`}
        alt="checked-2--v1"
      />
    </div>
  );
}
