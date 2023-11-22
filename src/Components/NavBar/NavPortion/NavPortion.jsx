import React from "react";
import "../NavPortion/NavPortion.css";

export default function NavPortion({ activeNav, setActiveNav }) {
  return (
    <div className="navPortion">
      <button onClick={() => setActiveNav("course")}>
        <img
          width="30"
          height="30"
          src={
            activeNav === "course"
              ? "https://img.icons8.com/ios/30/FFFFFF/literature--v1.png"
              : "https://img.icons8.com/ios/30/4D4D4D/literature--v1.png"
          }
          alt="literature--v1"
        />
      </button>
      <button onClick={() => setActiveNav("chat")}>
        <img
          width="30"
          height="30"
          src={
            activeNav === "chat"
              ? "https://img.icons8.com/dotty/30/FFFFFF/chat.png"
              : "https://img.icons8.com/dotty/30/4D4D4D/chat.png"
          }
          alt="chat"
        />
      </button>
    </div>
  );
}
