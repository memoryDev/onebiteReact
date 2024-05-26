import "./List.css";
import TodoItem from "./TotoItem";
import { useContext, useState } from "react";
import { TodoContext } from "../App";

const List = () => {
  const [search, setSearch] = useState("");
  const { todos } = useContext(TodoContext);

  const onChageSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getFilteredDate();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        value={search}
        onChange={onChageSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
