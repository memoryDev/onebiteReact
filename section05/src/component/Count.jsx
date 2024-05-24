import { useState } from "react";

const Count = (props) => {
  console.log(props);
  const [light, setLight] = useState(0);

  const countUp = () => {
    setLight(light + 1);
  };

  return (
    <>
      <h1>{light}</h1>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Count;
