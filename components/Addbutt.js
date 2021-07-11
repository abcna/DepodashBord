import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Addbutt({ todo, disspatchtodos }) {
  const [inputValue, setInputValue] = useState("");
  

  function handleclick() {
    disspatchtodos({
      type: "add",
      payload: { titel: inputValue, tedad: 0, iscomplited: false, id: uuid() },
    });
    setInputValue("");
  }
  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="کد روسری را وارد کنید "
      />
      <button
        onClick={handleclick}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}
