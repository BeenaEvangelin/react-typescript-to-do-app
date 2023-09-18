import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/TodoContext";
import classes from "./Todos.module.css";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <div className={classes.todos}>
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
