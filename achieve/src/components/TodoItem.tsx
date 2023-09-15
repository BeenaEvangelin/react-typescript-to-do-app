import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <div className={classes.item}>{props.text}</div>;
};

export default TodoItem;
