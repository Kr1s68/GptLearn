import React, { useEffect, useState } from "react";
import "../Editor/Editor.css";
import Axios from "axios";

export default function Editor({ id }) {
  const [data, setData] = useState();

  const getData = async () => {
    await Axios.get(`https://gptlearn-api.onrender.com/courses/${id}`, {}).then(
      (response) => setData(response.data[0].content)
    );
  };

  const setCourseData = async () => {
    await Axios.post(`https://gptlearn-api.onrender.com/courses/${id}`, {
      data,
    });
  };

  async function save() {
    await setCourseData();
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="editorWrapper">
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <button onClick={save}>Save</button>
    </div>
  );
}
