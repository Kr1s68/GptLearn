import React, { useEffect, useState } from "react";
import "../CoursePortion/CoursePortion.css";
import MiniCourse from "./miniCourse/miniCourse.jsx";
import Axios from "axios";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import MiniExam from "./miniExam/miniExam";

export default function CoursePortion({ courses }) {
  const courseArr = courses.split(",");
  const nav = useNavigate();

  return (
    <div className="chats">
      {courseArr.map((Item, Id) => {
        return (
          <>
            <MiniCourse
              key={Id}
              courseId={parseInt(Item)}
              courseTitle={"text"}
            />
            <MiniExam key={Id} courseId={parseInt(Item)} courseTitle={"text"} />
          </>
        );
      })}
      <div className="chat" onClick={() => nav("/courses")}>
        <div className="titleWrapper">
          <p className="titleNoHover">Start a new course</p>
        </div>
        <img
          width="25"
          height="25"
          src={"https://img.icons8.com/pastel-glyph/30/FFFFFF/plus--v1.png"}
          alt="checked-2--v1"
        />
      </div>
    </div>
  );
}
