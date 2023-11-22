import React, { useState, useEffect } from "react";
import "../NavBar/NavBar.css";
import ChatPortion from "./ChatPortion/ChatPortion";
import ProfilePortion from "./ProfilePortrion/ProfilePortion";
import NavPortion from "./NavPortion/NavPortion";
import CoursePortion from "./CoursePortion/CoursePortion";
import { useAuth } from "../../Contexts/AuthContext";
import Axios from "axios";
import { useNav } from "../../Contexts/NavContext";

export default function NavBar({ position }) {
  const { activeNav, setActiveNav } = useNav();
  const { currentUser, userData, setUserData } = useAuth();

  const getData = async (email) => {
    await Axios.get(
      `https://gptlearn-api.onrender.com/users/email/${email}`,
      {}
    ).then(
      (response) => (
        setUserData(response.data[0]),
        localStorage.setItem("admin", response.data[0].admin),
        localStorage.setItem("subscription", response.data[0].subscription)
      )
    );
  };

  useEffect(() => {
    currentUser && getData(currentUser.email);
  }, [currentUser]);

  return (
    <div
      className="NavDiv"
      style={{
        position: position,
      }}
    >
      <NavPortion activeNav={activeNav} setActiveNav={setActiveNav} />
      <hr style={{ marginInline: "4%" }}></hr>
      {activeNav === "course" ? (
        <CoursePortion courses={userData.picked_courses} />
      ) : (
        <ChatPortion
          chats={userData.chats}
          userId={userData.userID}
          getData={getData}
          email={currentUser.email}
        />
      )}
      <hr
        style={{
          marginInline: "4%",
          marginBottom: position === "fixed" && "-8px",
        }}
      ></hr>
      <ProfilePortion username={userData.username} image={userData.image} />
    </div>
  );
}
