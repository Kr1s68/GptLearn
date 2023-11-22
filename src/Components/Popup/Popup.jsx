import React, { useState } from "react";
import "../Popup/Popup.css";
import { useAuth } from "../../Contexts/AuthContext";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Popup({ popupDisplay, setPopupDisplay }) {
  const { userData } = useAuth();
  const nav = useNavigate();

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function formatTimestampToDDMMYYYY(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0"); // Get the day and pad with leading zeros if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get the month (add 1 because months are zero-indexed) and pad with leading zeros if necessary
    const year = date.getFullYear(); // Get the year

    return `${day}/${month}/${year}`;
  }

  function save() {
    setPopupDisplay(false);
    setCookie("chatSettingsResponse", chatSettings.response, 7);
    setCookie("chatSettingsUserData", chatSettings.userData, 7);
  }

  const [chatSettings, setChatSettings] = useState({
    response: getCookie("chatSettingsResponse")
      ? getCookie("chatSettingsResponse")
      : "",
    userData: getCookie("chatSettingsUserData")
      ? getCookie("chatSettingsUserData")
      : "",
  });
  console.log(getCookie("chatSettingsResponse"));
  console.log(getCookie("chatSettingsUserData"));

  const handleResponseChange = (data) => {
    setChatSettings((prevChatSettings) => ({
      ...prevChatSettings,
      response: data,
    }));
  };

  const handleUserDataChange = (data) => {
    setChatSettings((prevChatSettings) => ({
      ...prevChatSettings,
      userData: data,
    }));
  };

  const clearAllChats = async () => {
    await Axios.post(
      `https://gptlearn-api.onrender.com/chats/clear/${userData.email}`,
      {}
    ).then((response) => nav(`/chat/${response.data[0]}`));
    window.location.reload();
  };

  console.log(userData);
  return (
    <div
      className="background"
      style={{ display: popupDisplay ? "flex" : "none" }}
    >
      {popupDisplay === "chatSettings" ? (
        <div className="popup">
          <h2>Custom Instructions</h2>
          <label>
            What would you like our assistent to know about you to provide
            better responses?
          </label>
          <textarea
            value={chatSettings.userData}
            onChange={(e) => handleUserDataChange(e.target.value)}
          ></textarea>
          <label>How would you like our assistent to respond?</label>
          <textarea
            value={chatSettings.response}
            onChange={(e) => handleResponseChange(e.target.value)}
          ></textarea>
          <div>
            <button onClick={() => setPopupDisplay(false)}>Cancel</button>{" "}
            <button onClick={save}>Save</button>
          </div>
        </div>
      ) : (
        <div className="popup">
          <h2>User Settings</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label>Delete Account</label>
            <button>Delete</button>
          </div>
          <hr style={{ width: "90%", marginBottom: "3%" }}></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label>Clear all Chats</label>
            <button onClick={clearAllChats}>Clear</button>
          </div>
          {userData.subscription === 2 ? (
            <>
              <hr style={{ width: "90%", marginBottom: "3%" }}></hr>
              <label>Manage Subscription:</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <label style={{ marginTop: "3%" }}>
                  Subscribed until:{" "}
                  {formatTimestampToDDMMYYYY(userData.subscription_timestamp)}
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              ></div>
              <h2>Important notice:</h2>
              <label style={{ paddingInline: "10%" }}>
                In accordance with our company's beliefs against unauthorized
                fund withdrawals, subscription renewals do not occur
                automatically. Instead, users are required to initiate the
                renewal process manually on a monthly basis following the
                conclusion of their previous subscription period.
              </label>
              <hr style={{ width: "90%", marginBottom: "3%" }}></hr>
            </>
          ) : (
            <>
              <hr style={{ width: "90%", marginBottom: "3%" }}></hr>
              <label style={{ marginBottom: "3%" }}>Manage Subscription:</label>
              <div
                style={{ display: "flex", flexDirection: "row", width: "82%" }}
              >
                <div className="freePlan">
                  <ul>
                    <p className="priceLabel">0.00$</p>
                    <li>2 courses</li>
                    <li>GPT 3.5 Turbo</li>
                    <li>10 Chats</li>
                    <li>No Discord Access</li>
                    <button>Subscribed✔️</button>
                  </ul>
                </div>
                <div className="premiumPlan">
                  <ul>
                    <p className="priceLabel">49.99$</p>
                    <li>10 courses</li>
                    <li>GPT 4</li>
                    <li>Unlimited Chats</li>
                    <li>Full Discord Access</li>
                    <button onClick={() => nav("/checkout")}>Subscribe</button>
                  </ul>
                </div>
              </div>
              <hr
                style={{ width: "90%", marginBottom: "3%", marginTop: "-2%" }}
              ></hr>
            </>
          )}
          <button
            onClick={() => setPopupDisplay(false)}
            style={{ marginTop: userData.subscription === 2 ? "1%" : "-1%" }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
