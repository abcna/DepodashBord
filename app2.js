import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Pagecontent from "./components/pagecontent";
import Addbutt from "./components/Addbutt";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";
import { useEffect } from "react";

function App() {
  const initialTodo = [
    {
      id: uuid(),
      titel: "code 1010",
      iscomplited: false,
      tedad: 7,
    },
    {
      id: uuid(),
      titel: "code 1011",
      iscomplited: false,
      tedad: 8,
    },
    {
      id: uuid(),
      titel: "code 1012",
      iscomplited: false,
      tedad: 6,
    },
    {
      id: uuid(),
      titel: "code 1013",
      iscomplited: false,
      tedad: 13,
    },
    {
      id: uuid(),
      titel: "code 1014",
      iscomplited: false,
      tedad: 6,
    },
    {
      id: uuid(),
      titel: "code 1015",
      iscomplited: false,
      tedad: 10,
    },
    {
      id: uuid(),
      titel: "code 1016",
      iscomplited: false,
      tedad: 11,
    },
    {
      id: uuid(),
      titel: "code 1017",
      iscomplited: false,
      tedad: 10,
    },
    {
      id: uuid(),
      titel: "code 1018",
      iscomplited: false,
      tedad: 10,
    },
    {
      id: uuid(),
      titel: "code 1019",
      iscomplited: false,
      tedad: 11,
    },
    {
      id: uuid(),
      titel: "code 1020",
      iscomplited: false,
      tedad: 9,
    },
    {
      id: uuid(),
      titel: "code 1021",
      iscomplited: false,
      tedad: 11,
    },
    {
      id: uuid(),
      titel: "code 1022",
      iscomplited: false,
      tedad: 9,
    },
    {
      id: uuid(),
      titel: "code 1023",
      iscomplited: false,
      tedad: 10,
    },
    {
      id: uuid(),
      titel: "code 1024",
      iscomplited: false,
      tedad: 12,
    },
  ];
  const [todos, disspatchtodos] = useReducer(func, getInitial());
  function getInitial() {
    const jsonTodos = localStorage.getItem("todos");
    return jsonTodos ? JSON.parse(jsonTodos) : initialTodo;
  }
  const initialforokhte = 0;
  const [forokhte, setForokhte] = useState(getInitialForokhte);

  useEffect(() => {
    const TodosJson = JSON.stringify(forokhte);
    localStorage.setItem("forokhte", TodosJson);
  }, [forokhte]);

  function getInitialForokhte() {
    const jsonTodos = localStorage.getItem("forokhte");
    return jsonTodos ? JSON.parse(jsonTodos) : 0;
  }

  function onclickfunc(op) {
    if (op === "mos") {
      setForokhte(forokhte - 1);
    } else if (op === "manf") {
      setForokhte(forokhte + 1);
    }
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
                          setForokhte={setForokhte}
                          forokhte={forokhte}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          {" "}
          <h1>
            {" "}
            <button
              class="w3-button w3-ripple w3-red"
              onClick={() => onclickfunc("mos")}
            >
              -
            </button>{" "}
            <button
              class="w3-button w3-ripple w3-yellow"
              onClick={() => onclickfunc("manf")}
            >
              +
            </button>{" "}
            شما در مجموع <l1 style={{ color: "green" }}> {forokhte} </l1> شال و
            <l1 type='number' style={{ color: "green" }} > {Number(forokhte) * 88000} </l1>  تومان فروخته اید
          </h1>{" "}
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

// const newTodos = todos.map((todo) => {
//   if (todo.id === todoId) {
//     return { ...todos, iscomplited: !todo.iscomplited };
//   } else {
//     return todo;
//   }
// });

/* {todos.map((todo) => (
                      <Pagecontent handletuggles={handletuggle} todo={todo} key={uuid()} />
                    ))} */

// -------------------------
// const [todos, setTodos] = useState(initialTodo);

// function handletuggle(todoId) {
//   const temptodos = [...todos];
//   const foundedItem = temptodos.find((item) => {
//     return item.id === todoId;
//   });

//   foundedItem.iscomplited = !foundedItem.iscomplited;
//   setTodos(temptodos);
// }
