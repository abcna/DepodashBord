import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Pagecontent from "./components/pagecontent";
import Addbutt from "./components/Addbutt";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";
import { useEffect } from "react";

function App() {
  
  const [todos, disspatchtodos] = useReducer(func, getInitial());
  function getInitial() {
    const jsonTodos = localStorage.getItem("todos");
    return JSON.parse(jsonTodos);
  }
  function func(state, action) {
    switch (action.type) {
      case "add": {
        if (action.payload.titel === "") {
          return alert("داخل کادر را پر کنید "), state;
        } else {
          return [action.payload, ...state];
        }
      }
      case "plus": {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, tedad: (item.tedad += 1) };
          } else {
            return item;
          }
        });
      }
      case "remove": {
        return state.filter((item) => {
          if (action.payload.id !== item.id) {
            return { ...item };
          }
        });
      }
      case "mines": {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, tedad: (item.tedad -= 1) };
          } else {
            return item;
          }
        });
      }
      case "changestatus":
      case "changestatus": {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, iscomplited: !action.payload.iscomplited };
          } else {
            return item;
          }
        });
      }
      default:
        return state;
    }
  }

  useEffect(() => {
    const TodosJson = JSON.stringify(todos);
    localStorage.setItem("todos", TodosJson);
  }, [todos]);

  return (
    <body style={{ marginTop: 300 }}>
      <div className="page-content page-container" id="page-content">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">موجودی انبار </h4>
                <Addbutt disspatchtodos={disspatchtodos} todo={todos} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column todo-list">
                    {todos.map((todoitem) => {
                      return (
                        <Pagecontent
                          todo={todoitem}
                          disspatchtodos={disspatchtodos}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
