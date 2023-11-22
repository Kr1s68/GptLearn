import React, { useState, useEffect } from "react";
import "../Chat/Chat.css";
import Axios from "axios";
import { useAuth } from "../../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Chat({ chatId }) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const nav = useNavigate();

  const getData = async (id) => {
    await Axios.get(`https://gptlearn-api.onrender.com/chats/${id}`, {}).then(
      (response) => setInputValue(response.data[0])
    );
    setLoading(false);
  };

  const setName = async (id) => {
    await Axios.post(
      `https://gptlearn-api.onrender.com/chats/name/${id}`,
      inputValue
    ).then((response) => console.log(response));
    setLoading(false);
  };

  const deleteChat = async (id) => {
    await Axios.post(
      `https://gptlearn-api.onrender.com/chats/delete/${id}`,
      currentUser
    ).then((response) => localStorage.setItem("chats", response.data));
    setLoading(false);
  };

  useEffect(() => {
    currentUser && getData(chatId);
  }, [chatId]);

  return (
    <div className="chat" onClick={() => nav(`/chat/${chatId}`)}>
      <div className="titleWrapper">
        <p
          style={{ display: editable === false ? "block" : "none" }}
          className="title"
        >
          {inputValue && inputValue.Title}
        </p>{" "}
        <input
          style={{ display: editable === true ? "block" : "none" }}
          type="text"
          className="titleEditor"
          value={inputValue && inputValue.Title}
          onChange={(e) => setInputValue({ Title: e.target.value })}
        ></input>
      </div>
      <button onClick={() => setEditable(!editable)}>
        {editable ? (
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/20/FFFFFF/checked-2--v1.png"
            alt="checked-2--v1"
            onClick={() => setName(chatId)}
          />
        ) : (
          <img
            width="20"
            src="https://img.icons8.com/ios/20/FFFFFF/edit--v1.png"
            alt="edit--v1"
          />
        )}
      </button>
      <button>
        <img
          width="20"
          src="https://img.icons8.com/carbon-copy/20/FFFFFF/filled-trash.png"
          alt="filled-trash"
          onClick={() => deleteChat(chatId)}
        />
      </button>
    </div>
  );
}
