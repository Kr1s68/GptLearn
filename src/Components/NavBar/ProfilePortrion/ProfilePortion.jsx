import React, { useEffect, useState } from "react";
import "../ProfilePortrion/ProfilePortion.css";
import { useAuth } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Popup from "../../Popup/Popup";

export default function ProfilePortion({ username, image }) {
  const { currentUser, logout } = useAuth();
  const [displaySettings, setDisplaySettings] = useState(false);

  const nav = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      nav("/");
    } catch {
      console.log("Failed to log out");
    }
  }

  const [popupDisplay, setPopupDisplay] = useState(false);

  return (
    <div>
      <Popup popupDisplay={popupDisplay} setPopupDisplay={setPopupDisplay} />
      <div
        className={
          displaySettings
            ? "settingsPopup visible"
            : "settingsPopup notDisplayed"
        }
      >
        <div onClick={() => setPopupDisplay("chatSettings")}>Chat Settings</div>
        <hr></hr>
        <div onClick={() => setPopupDisplay("userSettings")}>User Settings</div>
      </div>
      <div className="user">
        <img height="46px" src={image}></img>
        <div className="userName">{username}</div>
        <button
          className="userSettings"
          onClick={() => setDisplaySettings(!displaySettings)}
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/20/FFFFFF/ellipsis.png"
            alt="ellipsis"
          />
        </button>
      </div>
      <button className="log-out" onClick={handleLogout}>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/20/FFFFFF/exit--v1.png"
          alt="exit--v1"
        />
        Log Out
      </button>
    </div>
  );
}
