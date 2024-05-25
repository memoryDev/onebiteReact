import { useState } from "react";

// 간단한 회원가입 폼
// 1.이름
// 2.생년월일
// 3.국적
// 4.자기소개

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [contry, setContry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeContry = (e) => {
    setContry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <input value={name} onChange={onChangeName} placeholder="이름" />
        </div>
        <div>
          <input value={birth} onChange={onChangeBirth} type="date" />
        </div>
        <div>
          <select value={contry} onChange={onChangeContry}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>
        <div>
          <textarea onChange={onChangeBio} value={bio} />
          {bio}
        </div>
      </div>
    </>
  );
};

export default Register;
