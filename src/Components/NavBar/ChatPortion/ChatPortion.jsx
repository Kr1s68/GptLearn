import React, { useState } from "react";
import "../ChatPortion/ChatPortion.css";
import Chat from "./Chat/Chat";
import Axios from "axios";

export default function ChatPortion({ chats, userId, getData, email }) {
  const chatArr = chats.split(",");
  const [loading, setLoading] = useState(false);

  const createChat = async () => {
    setLoading(true);
    let insertId = 0;
    await Axios.post(
      `https://gptlearn-api.onrender.com/chats/buildChat/newChat`,
      {
        userId,
      }
    ).then((response) => (insertId = response.data));
    localStorage.setItem("chats", insertId);
    getData(email);
    setLoading(false);
  };

  return (
    <div className="chats">
      {chatArr.map((Item, Id) => {
        return <Chat key={Id} chatId={parseInt(Item)} />;
      })}
      <div className="chat" onClick={createChat}>
        <div className="titleWrapper">
          <p className="titleNoAnimation">New Chat</p>
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
