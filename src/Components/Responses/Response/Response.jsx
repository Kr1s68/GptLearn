import React from "react";
import "../Response/Response.css";
import { useState, useRef } from "react";
import { useEffect } from "react";
import js_beautify from "js-beautify";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNav } from "../../../Contexts/NavContext";

export default function Response({ content, Id }) {
  const codeRef = useRef(new Array());

  const { userData } = useAuth();

  codeRef.current = content.split("```");

  const { replaceIdentifiersWithHTML } = useNav();
  function CustomComponent({ text }) {
    let modifiedHTML = replaceIdentifiersWithHTML(text);

    return <div dangerouslySetInnerHTML={modifiedHTML}></div>;
  }

  return (
    <div className="Response">
      <img
        width="30"
        height="30"
        src={
          Id % 2 === 1
            ? userData.image
            : "https://img.icons8.com/ios-glyphs/30/FFFFFF/chatgpt.png"
        }
        alt="chatgpt"
      />
      <div className="splitter">
        {codeRef &&
          codeRef.current.map((Item, Id) => {
            return Id % 2 === 1 ? (
              <pre style={{ color: "#c1f2ed" }}>
                <code>
                  <CustomComponent text={Item} />
                </code>
              </pre>
            ) : (
              <div>
                {Item.replace(/([A-Z][^.!?]*)([.!?])\s+/g, "$1$2<br>")
                  .split("<br>")
                  .map((Iteration, Id) => {
                    return <p key={Id}>{Iteration}</p>;
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
