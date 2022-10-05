import React, { useState, useEffect } from "react";
import data from "./data";

function App() {
  //const [queList,setQueList] = useState(data);
  return (
    <div className="grid-container">
      <div className="grid-child">
        <h2 className="title1">Question and Answer about Login</h2>
      </div>
      <div className="grid-child">
        {data.map((question, index) => {
          return <Que key={index} que={question}></Que>;
        })}
      </div>
    </div>
  );

  function Que(prop) {
    const [isTrue, setIsTrue] = useState(false);
    const { que, ans } = prop.que;
    return (
      <div className={isTrue ? "que show1" : "que"}>
        <p className="content">
          <h3>{que}</h3>
          {isTrue ? (
            <button
              className="btn"
              type="button"
              onClick={() => setIsTrue(!isTrue)}
            >
              -
            </button>
          ) : (
            <button
              className="btn"
              type="button"
              onClick={() => setIsTrue(!isTrue)}
            >
              +
            </button>
          )}
          {/* {isTrue && <p className="text">{ans}</p>} */}
          <p className={isTrue ? "text show" : "text"}>{ans}</p>
        </p>
      </div>
    );
  }
}

export default App;
