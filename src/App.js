import "./App.css";
import React, { createContext, useReducer, useState, useEffect } from "react";
import { SideTable } from "./SideTable";
import { Details } from "./Details";

export const Context = createContext();
function reducer(state, action) {
  if (action.type === "data") {
    return action.payload;
  }
}

function App() {
  const [eachEle, setEachEle] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const userData = { state, eachEle: eachEle, setEachEle: setEachEle };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((getData) => {
        dispatch({
          type: "data",
          payload: getData,
        });
      });
  }, []);
  return (
    <Context.Provider value={userData}>
      <div className="mainContainer">
        <SideTable />
        <Details />
      </div>
    </Context.Provider>
  );
}

export default App;
