import React, { useContext, useState, useEffect, useNavigate } from "react";
import Axios from "axios";
import {
  auth,
  githubProvider,
  facebookProvider,
  googleProvider,
} from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    username: "...Loading",
    image: "...Loading",
    picked_courses: 1,
    chats: "...Loading",
  });

  function getEmailUsername(email) {
    const match = email.match(/([^@]+)/);
    if (match) {
      return match[0];
    } else {
      return null;
    }
  }

  useEffect(() => {
    userData &&
      Date.now() > userData.subscription_timestamp &&
      userData.subscription > 1 &&
      Axios.post(
        `https://gptlearn-api.onrender.com/users/unsubscribe/${currentUser.email}`
      ).then((response) => console.log(response));
  }, [userData]);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  async function githubSignin() {
    await auth
      .signInWithPopup(githubProvider)
      .then(function (result) {
        const token = result.credential.accessToken;
        const user = result.user._delegate;
        Axios.get(`https://gptlearn-api.onrender.com/users/email/${user.email}`)
          .then((response) => {
            const currentUserData = response;
            !currentUserData.data[0] &&
              Axios.post(`https://gptlearn-api.onrender.com/users/`, {
                username: getEmailUsername(user.email),
                email: user.email,
                image: user.photoURL,
              }).then((response) => console.log(response.data));
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });

        setCurrentUser(user);
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  async function facebookSignin() {
    await auth
      .signInWithPopup(facebookProvider)
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  async function googleSignin() {
    await auth
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const token = result.credential.accessToken;
        const user = result.additionalUserInfo.profile;
        Axios.get(`https://gptlearn-api.onrender.com/users/email/${user.email}`)
          .then((response) => {
            const currentUserData = response;
            console.log(currentUserData);
            !currentUserData.data[0] &&
              Axios.post(`https://gptlearn-api.onrender.com/users/`, {
                username: user.name,
                email: user.email,
                image: user.picture,
              }).then((response) => console.log(response.data));
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });

        setCurrentUser(user);
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  async function saveChats() {
    const userData = await Axios.get(
      `https://gptlearn-api.onrender.com/users/email/${currentUser.email}`,
      {}
    );

    localStorage.setItem("chats", userData.data[0].chats);
  }

  useEffect(() => {
    currentUser && saveChats();
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const obj = { ...user };
        fetch(`https://gptlearn-api.onrender.com/users/checkAdmin`, {
          body: JSON.stringify({ email: user.email }),
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            setLoading(false);
            response
              .json()
              .then((body) => {
                setCurrentUser({ ...obj._delegate, isAdmin: body.isAdmin });
              })
              .catch((e) => {
                setCurrentUser({ ...obj._delegate, isAdmin: false });
              });
          })
          .catch((e) => {
            setLoading(false);
            setCurrentUser({ ...obj._delegate, isAdmin: false });
          });
      } else {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    userData,
    setUserData,
    githubSignin,
    facebookSignin,
    googleSignin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
