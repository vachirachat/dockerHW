import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Logo from "./image/Logo.png";

function App() {
  const [name, setName] = useState("")
  const [todo, setTodo] = useState("")
  const [showTodo, setShowTodo] = useState([])
  const TodoObject = {
    "name": name,
    "Todo": todo,
  };

  const submit = () => {
    axios.post(`http://localhost:8000/addtodos`, TodoObject).then((res) => {
      console.log(res);
    });
  };

  const gettodo = () => {
    axios.get(`http://localhost:8000/gettodos`, TodoObject).then((res) => {
      setShowTodo(res.data)
      console.log(res.data)
    });
  };

  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
        <div class="row">
        <div class="col">
          <img src={Logo} />
        </div>
        <div class="col">
          <h1>TodoList</h1>
          <h5>Remember what you should remember</h5>
          <h3>Enter your Name :</h3>
          <input type="text" class="form-control" aria-label="Sizing example input" onChange={(e) => setName(e.target.value)} />
          <h3>Add your Todo :</h3>
          <textarea class="form-control" aria-label="With textarea" onChange={(e) => setTodo(e.target.value)} />
          <button type="button" class="btn btn-primary" style={{ marginTop: 20 }} onClick={() => {submit()}}>
            Add todoList
          </button>
          <button type="button" class="btn btn-primary" style={{ marginTop: 20, marginLeft: 20 }} onClick={() => {gettodo()}}>
            Click to view TodoList
          </button>
          <div>
          {showTodo.map((data) => <div>{`${data.name}`}</div>)}
          </div>
          </div>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
