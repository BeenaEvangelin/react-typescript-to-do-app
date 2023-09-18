import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Header from "./components/Header";
import TodosContextProvider from "./store/TodoContext";

const App = () => {
  return (
    <TodosContextProvider>
      <Header />
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
