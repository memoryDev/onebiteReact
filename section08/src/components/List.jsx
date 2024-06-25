import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredDate();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
              key={todo.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
