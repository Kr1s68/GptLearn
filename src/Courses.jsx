import React, { useEffect, useState } from "react";
import Course from "./Components/Course/Course";
import "./index.css";
import NavBar from "./Components/NavBar/NavBar";
import Axios from "axios";

export default function Courses() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await Axios.get(`https://gptlearn-api.onrender.com/courses`, {}).then(
      (response) => setData(response.data)
    );
    setLoading(false);
  };

  useEffect(() => {
    loading && getData();
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          backgroundColor: "transparent",
          width: "23%",
          height: "2%",
          marginRight: "4%",
        }}
      >
        <NavBar position={"fixed"} />
      </div>

      <div className="mainContentDiv">
        <input
          type="text"
          style={{
            marginTop: "2%",
            marginBottom: "1%",
            width: "40%",
            height: "4vh",
            marginLeft: "15%",
            outline: "none",
            background: "none",
            color: "white",
            border: "solid 2px white",
            borderRadius: "20px",
            paddingInline: "2%",
            fontSize: "1.2rem",
          }}
          placeholder="Find your course..."
        ></input>
        {data &&
          data.map((Item, Id) => {
            return (
              <Course
                key={Id}
                content={Item.description}
                title={Item.title}
                id={Item.courseID}
                image={Item.image}
                free={
                  Item.content.includes('<a class="hidden">//free//</a>')
                    ? true
                    : false
                }
              />
            );
          })}
      </div>
    </div>
  );
}
