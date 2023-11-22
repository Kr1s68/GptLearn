import React from "react";
import "../Chatbox/Chatbox.css";

export default function Chatbox({ onSubmit, value, onChange, clearChatbox }) {
  const onKeyDownHandler = (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      onSubmit();
      clearChatbox();
    }
  };
  return (
    <div className="Chatbox">
      <textarea
        placeholder="Send message..."
        onKeyDown={onKeyDownHandler}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
