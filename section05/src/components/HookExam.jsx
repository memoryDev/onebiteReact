//3가지 hook 관련된 팁
//1. 함수 컴포너틑, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출될 수는 없다.
//3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

import { useState } from "react";
import useInput from "./../hook/useInput";

//const state = useState();

const HookEaxm = () => {
  //   if (true) {
  //     const state2 = useState();
  //   }

  const state = useState();

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
    </div>
  );
};

export default HookEaxm;
