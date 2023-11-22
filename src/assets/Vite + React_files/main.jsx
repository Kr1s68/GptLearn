import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=09711a8a"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=09711a8a"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=09711a8a"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import ChatHome from "/src/ChatHome.jsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=09711a8a";
import "/src/index.css";
import Courses from "/src/Courses.jsx";
import Home from "/src/Home.jsx";
import Login from "/src/Components/Login/Login.jsx";
import SignUp from "/src/Components/SignUp/SignUp.jsx";
import Settings from "/src/Components/CourseBuilder/Settings/Settings.jsx";
import Editor from "/src/Components/CourseBuilder/Editor/Editor.jsx";
import CoursePage from "/src/Components/CoursePage/CoursePage.jsx";
import { SnippetProvider } from "/src/Contexts/SnippetContext.jsx";
import { AuthProvider } from "/src/Contexts/AuthContext.jsx";
import Axios from "/node_modules/.vite/deps/axios.js?v=09711a8a";
import { NavProvider } from "/src/Contexts/NavContext.jsx";
import Exam from "/src/Components/Exam/Exam.jsx";
const data = await Axios.get(`http://localhost:3001/courses`, {});
let chatData = localStorage.getItem("chats").split(",");
function checkLocalStorageChanges() {
  let currentChats = localStorage.getItem("chats");
  const pollInterval = 400;
  setInterval(function() {
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
  const endIndex = str.indexOf(endDelimiter, startIndex + startDelimiter.length);
  if (startIndex === -1 || endIndex === -1) {
    return "Delimiters not found";
  }
  const content = str.substring(startIndex + startDelimiter.length, endIndex);
  return content.trim();
}
function extractH2Content(inputString, number) {
  const pattern = new RegExp(`<h2 class="unitTitle" id="Unit${number}">(.*?)</h2>`, "i");
  const match = inputString.match(pattern);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
const paths = [{
  path: "/chat",
  element: /* @__PURE__ */ jsxDEV(ChatHome, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 54,
    columnNumber: 12
  }, this)
}, {
  path: "/courses",
  element: /* @__PURE__ */ jsxDEV(Courses, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 57,
    columnNumber: 12
  }, this)
}, {
  path: "/",
  element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 60,
    columnNumber: 12
  }, this)
}, {
  path: "/login",
  element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 63,
    columnNumber: 12
  }, this)
}, {
  path: "/signup",
  element: /* @__PURE__ */ jsxDEV(SignUp, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 66,
    columnNumber: 12
  }, this)
}, {
  path: "/editCourse",
  element: /* @__PURE__ */ jsxDEV(Settings, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 69,
    columnNumber: 12
  }, this)
}, {
  path: "/buildCourse",
  element: /* @__PURE__ */ jsxDEV(Editor, {}, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 72,
    columnNumber: 12
  }, this)
}];
let chatMappedPaths = chatData.map((Item) => {
  return {
    path: `/chat/${Item}`,
    element: /* @__PURE__ */ jsxDEV(ChatHome, { id: Item }, void 0, false, {
      fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
      lineNumber: 77,
      columnNumber: 14
    }, this)
  };
});
const mappedEditorPaths = data.data.map((Item) => {
  return {
    path: `/editor/${Item.courseID}`,
    element: /* @__PURE__ */ jsxDEV(Editor, { id: Item.courseID }, void 0, false, {
      fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
      lineNumber: 83,
      columnNumber: 14
    }, this)
  };
});
const mappedPaths = data.data.map((Item) => {
  return {
    path: `/course/${Item.courseID}`,
    element: /* @__PURE__ */ jsxDEV(CoursePage, { Content: Item.content }, void 0, false, {
      fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
      lineNumber: 89,
      columnNumber: 14
    }, this)
  };
});
const examPaths = data.data.map((BigItem, Id) => {
  const units = extractContent(BigItem.content).split(",");
  let content = "";
  for (const unit in units) {
    content = content + "," + extractH2Content(BigItem.content, unit);
  }
  return {
    path: `/exam/${BigItem.courseID}`,
    element: /* @__PURE__ */ jsxDEV(Exam, { Content: content, Subject: BigItem.title, Language: BigItem.language }, void 0, false, {
      fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
      lineNumber: 100,
      columnNumber: 14
    }, this)
  };
});
let allPaths = paths.concat(mappedPaths);
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
      element: /* @__PURE__ */ jsxDEV(ChatHome, { id: Item }, void 0, false, {
        fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
        lineNumber: 114,
        columnNumber: 16
      }, this)
    };
  });
  allPaths = allPaths.concat(chatMappedPaths);
  router = createBrowserRouter(allPaths);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(SnippetProvider, { children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDEV(NavProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 122,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 121,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 120,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
    lineNumber: 119,
    columnNumber: 63
  }, this));
}
checkLocalStorageChanges();
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(SnippetProvider, { children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDEV(NavProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
  lineNumber: 131,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
  lineNumber: 130,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
  lineNumber: 129,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "C:/Users/Kristiyan/Desktop/Proekti/gptLearn/GptLearn/src/main.jsx",
  lineNumber: 128,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,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UmVhY3RET00iLCJDaGF0SG9tZSIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkNvdXJzZXMiLCJIb21lIiwiTG9naW4iLCJTaWduVXAiLCJTZXR0aW5ncyIsIkVkaXRvciIsIkNvdXJzZVBhZ2UiLCJTbmlwcGV0UHJvdmlkZXIiLCJBdXRoUHJvdmlkZXIiLCJBeGlvcyIsIk5hdlByb3ZpZGVyIiwiRXhhbSIsImRhdGEiLCJnZXQiLCJjaGF0RGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzcGxpdCIsImNoZWNrTG9jYWxTdG9yYWdlQ2hhbmdlcyIsImN1cnJlbnRDaGF0cyIsInBvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3Q2hhdHMiLCJoYW5kbGVDaGF0c0NoYW5nZSIsImV4dHJhY3RDb250ZW50Iiwic3RyIiwic3RhcnREZWxpbWl0ZXIiLCJlbmREZWxpbWl0ZXIiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsImVuZEluZGV4IiwibGVuZ3RoIiwiY29udGVudCIsInN1YnN0cmluZyIsInRyaW0iLCJleHRyYWN0SDJDb250ZW50IiwiaW5wdXRTdHJpbmciLCJudW1iZXIiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibWF0Y2giLCJwYXRocyIsInBhdGgiLCJlbGVtZW50IiwiY2hhdE1hcHBlZFBhdGhzIiwibWFwIiwiSXRlbSIsIm1hcHBlZEVkaXRvclBhdGhzIiwiY291cnNlSUQiLCJtYXBwZWRQYXRocyIsImV4YW1QYXRocyIsIkJpZ0l0ZW0iLCJJZCIsInVuaXRzIiwidW5pdCIsInRpdGxlIiwibGFuZ3VhZ2UiLCJhbGxQYXRocyIsImNvbmNhdCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQ2hhdEhvbWUgZnJvbSBcIi4vQ2hhdEhvbWUuanN4XCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IENvdXJzZXMgZnJvbSBcIi4vQ291cnNlcy5qc3hcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWUuanN4XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vQ29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcIjtcbmltcG9ydCBTaWduVXAgZnJvbSBcIi4vQ29tcG9uZW50cy9TaWduVXAvU2lnblVwLmpzeFwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL0NvbXBvbmVudHMvQ291cnNlQnVpbGRlci9TZXR0aW5ncy9TZXR0aW5ncy5qc3hcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4vQ29tcG9uZW50cy9Db3Vyc2VCdWlsZGVyL0VkaXRvci9FZGl0b3IuanN4XCI7XG5pbXBvcnQgQ291cnNlUGFnZSBmcm9tIFwiLi9Db21wb25lbnRzL0NvdXJzZVBhZ2UvQ291cnNlUGFnZS5qc3hcIjtcbmltcG9ydCB7IFNuaXBwZXRQcm92aWRlciB9IGZyb20gXCIuL0NvbnRleHRzL1NuaXBwZXRDb250ZXh0LmpzeFwiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vQ29udGV4dHMvQXV0aENvbnRleHQuanN4XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOYXZQcm92aWRlciB9IGZyb20gXCIuL0NvbnRleHRzL05hdkNvbnRleHQuanN4XCI7XG5pbXBvcnQgRXhhbSBmcm9tIFwiLi9Db21wb25lbnRzL0V4YW0vRXhhbS5qc3hcIjtcblxuY29uc3QgZGF0YSA9IGF3YWl0IEF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvdXJzZXNgLCB7fSk7XG5cbmxldCBjaGF0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhdHNcIikuc3BsaXQoXCIsXCIpO1xuXG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZUNoYW5nZXMoKSB7XG4gIGxldCBjdXJyZW50Q2hhdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXRzXCIpO1xuICBjb25zdCBwb2xsSW50ZXJ2YWwgPSA0MDA7XG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld0NoYXRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGF0c1wiKTtcbiAgICBpZiAobmV3Q2hhdHMgIT09IGN1cnJlbnRDaGF0cykge1xuICAgICAgaGFuZGxlQ2hhdHNDaGFuZ2UoKTtcbiAgICAgIGN1cnJlbnRDaGF0cyA9IG5ld0NoYXRzO1xuICAgIH1cbiAgfSwgcG9sbEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbnRlbnQoc3RyKSB7XG4gIGNvbnN0IHN0YXJ0RGVsaW1pdGVyID0gXCIvLy8/Ly8vXCI7XG4gIGNvbnN0IGVuZERlbGltaXRlciA9IFwiLy8vPy8vL1wiO1xuICBjb25zdCBzdGFydEluZGV4ID0gc3RyLmluZGV4T2Yoc3RhcnREZWxpbWl0ZXIpO1xuICBjb25zdCBlbmRJbmRleCA9IHN0ci5pbmRleE9mKFxuICAgIGVuZERlbGltaXRlcixcbiAgICBzdGFydEluZGV4ICsgc3RhcnREZWxpbWl0ZXIubGVuZ3RoXG4gICk7XG5cbiAgaWYgKHN0YXJ0SW5kZXggPT09IC0xIHx8IGVuZEluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBcIkRlbGltaXRlcnMgbm90IGZvdW5kXCI7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gc3RyLnN1YnN0cmluZyhzdGFydEluZGV4ICsgc3RhcnREZWxpbWl0ZXIubGVuZ3RoLCBlbmRJbmRleCk7XG4gIHJldHVybiBjb250ZW50LnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEgyQ29udGVudChpbnB1dFN0cmluZywgbnVtYmVyKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgIGA8aDIgY2xhc3M9XCJ1bml0VGl0bGVcIiBpZD1cIlVuaXQke251bWJlcn1cIj4oLio/KTxcXC9oMj5gLFxuICAgIFwiaVwiXG4gICk7XG4gIGNvbnN0IG1hdGNoID0gaW5wdXRTdHJpbmcubWF0Y2gocGF0dGVybik7XG5cbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiB0aGUgcGF0dGVybiBpcyBub3QgZm91bmRcbiAgfVxufVxuXG5jb25zdCBwYXRocyA9IFtcbiAge1xuICAgIHBhdGg6IFwiL2NoYXRcIixcbiAgICBlbGVtZW50OiA8Q2hhdEhvbWUgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9jb3Vyc2VzXCIsXG4gICAgZWxlbWVudDogPENvdXJzZXMgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8SG9tZSAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgZWxlbWVudDogPExvZ2luIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvc2lnbnVwXCIsXG4gICAgZWxlbWVudDogPFNpZ25VcCAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2VkaXRDb3Vyc2VcIixcbiAgICBlbGVtZW50OiA8U2V0dGluZ3MgLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9idWlsZENvdXJzZVwiLFxuICAgIGVsZW1lbnQ6IDxFZGl0b3IgLz4sXG4gIH0sXG5dO1xuXG5sZXQgY2hhdE1hcHBlZFBhdGhzID0gY2hhdERhdGEubWFwKChJdGVtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogYC9jaGF0LyR7SXRlbX1gLFxuICAgIGVsZW1lbnQ6IDxDaGF0SG9tZSBpZD17SXRlbX0gLz4sXG4gIH07XG59KTtcblxuY29uc3QgbWFwcGVkRWRpdG9yUGF0aHMgPSBkYXRhLmRhdGEubWFwKChJdGVtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogYC9lZGl0b3IvJHtJdGVtLmNvdXJzZUlEfWAsXG4gICAgZWxlbWVudDogPEVkaXRvciBpZD17SXRlbS5jb3Vyc2VJRH0gLz4sXG4gIH07XG59KTtcblxuY29uc3QgbWFwcGVkUGF0aHMgPSBkYXRhLmRhdGEubWFwKChJdGVtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogYC9jb3Vyc2UvJHtJdGVtLmNvdXJzZUlEfWAsXG4gICAgZWxlbWVudDogPENvdXJzZVBhZ2UgQ29udGVudD17SXRlbS5jb250ZW50fSAvPixcbiAgfTtcbn0pO1xuXG5jb25zdCBleGFtUGF0aHMgPSBkYXRhLmRhdGEubWFwKChCaWdJdGVtLCBJZCkgPT4ge1xuICBjb25zdCB1bml0cyA9IGV4dHJhY3RDb250ZW50KEJpZ0l0ZW0uY29udGVudCkuc3BsaXQoXCIsXCIpO1xuICBsZXQgY29udGVudCA9IFwiXCI7XG4gIGZvciAoY29uc3QgdW5pdCBpbiB1bml0cykge1xuICAgIGNvbnRlbnQgPSBjb250ZW50ICsgXCIsXCIgKyBleHRyYWN0SDJDb250ZW50KEJpZ0l0ZW0uY29udGVudCwgdW5pdCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBgL2V4YW0vJHtCaWdJdGVtLmNvdXJzZUlEfWAsXG4gICAgZWxlbWVudDogKFxuICAgICAgPEV4YW1cbiAgICAgICAgQ29udGVudD17Y29udGVudH1cbiAgICAgICAgU3ViamVjdD17QmlnSXRlbS50aXRsZX1cbiAgICAgICAgTGFuZ3VhZ2U9e0JpZ0l0ZW0ubGFuZ3VhZ2V9XG4gICAgICAvPlxuICAgICksXG4gIH07XG59KTtcblxubGV0IGFsbFBhdGhzID0gcGF0aHMuY29uY2F0KG1hcHBlZFBhdGhzKTtcbmFsbFBhdGhzID0gYWxsUGF0aHMuY29uY2F0KGV4YW1QYXRocyk7XG5hbGxQYXRocyA9IGFsbFBhdGhzLmNvbmNhdChjaGF0TWFwcGVkUGF0aHMpO1xuYWxsUGF0aHMgPSBhbGxQYXRocy5jb25jYXQobWFwcGVkRWRpdG9yUGF0aHMpO1xuXG5sZXQgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihhbGxQYXRocyk7XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYXRzQ2hhbmdlKCkge1xuICBjb25zb2xlLmxvZyhcImRhdGEgY2hhbmdlZFwiKTtcbiAgY2hhdERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXRzXCIpLnNwbGl0KFwiLFwiKTtcbiAgY2hhdE1hcHBlZFBhdGhzID0gY2hhdERhdGEubWFwKChJdGVtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IGAvY2hhdC8ke0l0ZW19YCxcbiAgICAgIGVsZW1lbnQ6IDxDaGF0SG9tZSBpZD17SXRlbX0gLz4sXG4gICAgfTtcbiAgfSk7XG4gIGFsbFBhdGhzID0gYWxsUGF0aHMuY29uY2F0KGNoYXRNYXBwZWRQYXRocyk7XG4gIHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoYWxsUGF0aHMpO1xuICBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICAgIDxTbmlwcGV0UHJvdmlkZXI+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8TmF2UHJvdmlkZXI+XG4gICAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgICAgICA8L05hdlByb3ZpZGVyPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9TbmlwcGV0UHJvdmlkZXI+XG4gICk7XG59XG5cbmNoZWNrTG9jYWxTdG9yYWdlQ2hhbmdlcygpO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8U25pcHBldFByb3ZpZGVyPlxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8TmF2UHJvdmlkZXI+XG4gICAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICAgIDwvTmF2UHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIDwvU25pcHBldFByb3ZpZGVyPlxuKTtcbiJdLCJmaWxlIjoiQzovVXNlcnMvS3Jpc3RpeWFuL0Rlc2t0b3AvUHJvZWt0aS9ncHRMZWFybi9HcHRMZWFybi9zcmMvbWFpbi5qc3gifQ==