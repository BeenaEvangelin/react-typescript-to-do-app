import React from "react";
import Todo from "../Data/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div className={classes.todos}>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
