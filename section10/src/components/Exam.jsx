import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === "INCREASE") {
    return state + action.data;
  } else if (action.type === "MINUS") {
    return state - action.data;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "MINUS",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
