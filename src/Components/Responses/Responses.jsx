import React from "react";
import "../Responses/Responses.css";
import Response from "./Response/Response";

export default function Responses({ content, loading }) {
  return (
    <div className="Responses">
      {content.map((Item, Id) => {
        return <Response content={Item} key={Id} Id={Id} />;
      })}
      <div
        className="dot-falling loader"
        style={{ display: loading ? "block" : "none" }}
      ></div>
    </div>
  );
}
