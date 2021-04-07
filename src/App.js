import React from "react";
import "./styles.css";

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now()
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TODOS</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <div className="add-item">
          <input
            className="todo-input"
            placeholder="type to add item to list"
            id="new-todo"
            value={text}
            onChange={handleChange}
          />
          <button className="add-button">Add #{items.length + 1}</button>
        </div>
      </form>

      <ul className="list">
        {items.map((item) => (
          <li className="list-item" key={item.id}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
