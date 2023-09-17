import React from "react";
import Todo from "../Data/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <div className={classes.todos}>
      <ul>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
