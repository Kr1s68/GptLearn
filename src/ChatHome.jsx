import { useEffect, useState } from "react";
import "./App.css";
import Responses from "./Components/Responses/Responses";
import NavBar from "./Components/NavBar/NavBar";
import Chatbox from "./Components/Chatbox/Chatbox";
import axios from "axios";
import { useRef } from "react";

function App({ id }) {
  const chatStack = useRef(new Array());

  const [loading, setLoading] = useState(false);

  const [chatBoxFormData, setChatBoxFormData] = useState("");

  let params;
  try {
    params = new URLSearchParams([
      ["message", chatBoxFormData],
      ["prevMessages", chatStack.current.join("///!///")],
    ]);
  } catch {}

  const getData = async (id) => {
    setLoading(true);
    await axios
      .get(`https://gptlearn-api.onrender.com/chats/${id}`, {})
      .then(
        (response) =>
          (chatStack.current = chatStack.current.concat(
            response.data[0].Content.split("///!///")
          ))
      );
    setLoading(false);
    console.log(chatStack.current);
  };

  const loadChatGPTString = async () => {
    setLoading(true);
    await axios
      .get(`https://gptlearn-api.onrender.com/getSentence`, { params })
      .then((response) => {
        chatStack.current.push(response.data);
      });
    await axios.post(
      `https://gptlearn-api.onrender.com/chats/${id}`,
      chatStack
    );
    setLoading(false);
  };

  const handleChange = (e) => {
    setChatBoxFormData(e.target.value);
  };

  const clearChatbox = () => {
    chatStack.current.push(chatBoxFormData);
    setChatBoxFormData("");
    localStorage.codeData = "";
  };

  useEffect(() => {
    setChatBoxFormData(localStorage.codeData);
  }, [0]);

  useEffect(() => {
    chatStack.current = new Array();
    getData(id);
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <Responses content={chatStack.current} loading={loading} />
        <Chatbox
          onSubmit={loadChatGPTString}
          value={chatBoxFormData}
          onChange={handleChange}
          clearChatbox={clearChatbox}
        />
      </div>
    </>
  );
}

export default App;
