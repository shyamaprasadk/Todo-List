import { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDay = new Date().getDay();
  const day = weekday[getDay];

  const handleAdd = () => {
    if (todo !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  };

  const handleClose = () => {};

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          value={todo}
          placeholder="🖊️ Add item..."
        />
        <i className="fas fa-plus" onClick={handleAdd}></i>
      </div>
      {list
        .map((item, index) => {
          return (
            <div className="todos" key={index}>
              <div className="todo">
                <div className="left">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>{item}</p>
                </div>
                <div className="right">
                  <i onClick={handleClose} className="fas fa-times"></i>
                </div>
              </div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default App;
