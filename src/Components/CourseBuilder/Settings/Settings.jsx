import React from "react";
import "../Settings/Settings.css";

export default function Settings() {
  return (
    <div className="settingsWrapper">
      <div>
        <label>Title: </label>
        <input type="text"></input>
      </div>
      <div className="description">
        <label>Description:</label>
        <textarea></textarea>
      </div>
      <div>
        <label>Image: </label>
        <input type="text"></input>
      </div>
      <button>Open courseBuilder</button>
      <button>Save</button>
    </div>
  );
}
