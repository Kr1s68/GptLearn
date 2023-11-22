import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ChatHome from "./ChatHome.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Courses from "./Courses.jsx";
import Home from "./Home.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Settings from "./Components/CourseBuilder/Settings/Settings.jsx";
import Editor from "./Components/CourseBuilder/Editor/Editor.jsx";
import CoursePage from "./Components/CoursePage/CoursePage.jsx";
import { SnippetProvider } from "./Contexts/SnippetContext.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import Axios from "axios";
import { NavProvider } from "./Contexts/NavContext.jsx";
import Exam from "./Components/Exam/Exam.jsx";
import Payment from "./Components/Checkout/Payment.jsx";
import FAQ from "./FAQ.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

const data = await Axios.get(`https://gptlearn-api.onrender.com/courses`, {});

let chatData = localStorage.getItem("chats").split(",");
const admin = localStorage.getItem("admin");
const subscription = localStorage.getItem("subscription");
console.log(admin);
function checkLocalStorageChanges() {
  let currentChats = localStorage.getItem("chats");
  const pollInterval = 400;

  setInterval(function () {
    const newChats = localStorage.getItem("chats");
    if (newChats !== currentChats) {
      handleChatsChange();
      currentChats = newChats;
    }
  }, pollInterval);
}

function extractContent(str) {
  const startDelimiter = "///?///";
  const endDelimiter = "///?///";
  const startIndex = str.indexOf(startDelimiter);
  const endIndex = str.indexOf(
    endDelimiter,
    startIndex + startDelimiter.length
  );

  if (startIndex === -1 || endIndex === -1) {
    return "Delimiters not found";
  }

  const content = str.substring(startIndex + startDelimiter.length, endIndex);
  return content.trim();
}

function extractH2Content(inputString, number) {
  const pattern = new RegExp(
    `<h2 class="unitTitle" id="Unit${number}">(.*?)<\/h2>`,
    "i"
  );
  const match = inputString.match(pattern);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // Return null if the pattern is not found
  }
}

const paths = [
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/checkout",
    element: <Payment />,
  },
  {
    path: "/completion",
    element: <div>Thank you!</div>,
  },
  {
    path: "/faqs",
    element: <FAQ />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

let chatMappedPaths = chatData.map((Item) => {
  return {
    path: `/chat/${Item}`,
    element: <ChatHome id={Item} />,
  };
});

const mappedEditorPaths = data.data.map((Item) => {
  if (parseInt(admin) === 1) {
    return {
      path: `/editor/${Item.courseID}`,
      element: <Editor id={Item.courseID} />,
    };
  } else {
    return {
      path: "/editor/noaccess",
      element: <div>No Access</div>,
    };
  }
});

const mappedPaths = data.data.map((Item) => {
  return {
    path: `/course/${Item.courseID}`,
    element: <CoursePage Content={Item.content} />,
  };
});

const freeCoursePaths = [
  {
    path: `/course/1`,
    element: <CoursePage Content={data.data[0].content} />,
  },
  {
    path: `/course/4`,
    element: <CoursePage Content={data.data[3].content} />,
  },
];

const examPaths = data.data.map((BigItem, Id) => {
  const units = extractContent(BigItem.content).split(",");
  let content = "";
  for (const unit in units) {
    content = content + "," + extractH2Content(BigItem.content, unit);
  }
  return {
    path: `/exam/${BigItem.courseID}`,
    element: (
      <Exam
        Content={content}
        Subject={BigItem.title}
        Language={BigItem.language}
      />
    ),
  };
});

let allPaths = paths.concat(subscription > 1 ? mappedPaths : freeCoursePaths);
allPaths = allPaths.concat(examPaths);
allPaths = allPaths.concat(chatMappedPaths);
allPaths = allPaths.concat(mappedEditorPaths);

let router = createBrowserRouter(allPaths);

function handleChatsChange() {
  console.log("data changed");
  chatData = localStorage.getItem("chats").split(",");
  chatMappedPaths = chatData.map((Item) => {
    return {
      path: `/chat/${Item}`,
      element: <ChatHome id={Item} />,
    };
  });
  allPaths = allPaths.concat(chatMappedPaths);
  router = createBrowserRouter(allPaths);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <SnippetProvider>
      <AuthProvider>
        <NavProvider>
          <RouterProvider router={router} />
        </NavProvider>
      </AuthProvider>
    </SnippetProvider>
  );
}

checkLocalStorageChanges();

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnippetProvider>
    <AuthProvider>
      <NavProvider>
        <RouterProvider router={router} />
      </NavProvider>
    </AuthProvider>
  </SnippetProvider>
);
