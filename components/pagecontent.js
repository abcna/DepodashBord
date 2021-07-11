import { func } from "prop-types";
import React from "react";
import { useEffect } from "react";
export default function Pagecontent({
  todo,
  disspatchtodos,
  setForokhte,
  forokhte,
}) {
  function minestodo() {
    disspatchtodos({ type: "mines", payload: todo }), setForokhte(forokhte + 1);
  }
 

  return (
    <li className={todo.iscomplited ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          {" "}
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.iscomplited}
            value={todo.value}
            onClick={() =>
              disspatchtodos({ type: "changestatus", payload: todo })
            }
          />
          {todo.titel}
          <i className="input-helper"></i>
          <div style={{ fontSize: 18 }}> موجودی {todo.tedad} </div>
        </label>
      </div>{" "}
      <i
        onClick={() => disspatchtodos({ type: "remove", payload: todo })}
        className="remove mdi mdi-close-circle-outline"
      ></i>
      <button
        style={{
          backgroundColor: "green",
          marginLeft: 15,
          borderRadius: 50,
          fontSize: 30,
        }}
        onClick={() => disspatchtodos({ type: "plus", payload: todo })}
      >
        {" "}
        +{" "}
      </button>
      <button
        style={{
          backgroundColor: "red",
          marginLeft: 15,
          borderRadius: 50,
          fontSize: 30,
        }}
        onClick={minestodo}
      >
        {" "}
        -{" "}
      </button>
    </li>
  );
}
