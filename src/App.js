import { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const id = Date.now();

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
      setList([...list, { id: id, text: todo, status: false }]);
      setTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleClose = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const handleChecked = ({ e, item }) => {
    console.log("vvvvv", e.target.checked);
    console.log(item);
    setList(
      list.filter((checkedList) => {
        if (checkedList.id === item.id) {
          checkedList.status = JSON.parse(e.target.checked);
        }
        return checkedList;
      })
    );
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
                  <input
                    onChange={(e) => handleChecked({ e, item })}
                    value={item.status}
                    type="checkbox"
                    name=""
                    id="checkbox"
                  />
                  <p>{item.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => handleClose(item.id)}
                    className="fas fa-times"
                  ></i>
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
