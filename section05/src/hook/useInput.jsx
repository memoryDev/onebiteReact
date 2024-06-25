import { useState } from "react";

function useInput() {
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };
}

export default useState;
