import axios from "axios";
import { useState } from "react";
import { toEditorSettings } from "typescript";
import "./App.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
// typeは基本、最初は大文字で設定

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  // useStateでの型指定

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
      // setTodosにデータが入ることでtodosも更新される
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id}title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </div>
  );
}

export default App;
