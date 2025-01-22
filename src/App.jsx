import { useState } from "react"; // React의 useState 훅을 가져옵니다.
import "./App.css"; // CSS 파일을 가져옵니다.

function App() {
  // 초기 사용자 상태를 정의합니다.
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];

  // users 상태와 setUsers 상태 업데이트 함수를 정의합니다.
  const [users, setUsers] = useState(initialState);
  // 이름과 나이를 위한 상태를 정의합니다.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 사용자를 추가하는 함수입니다.
  const addUser = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로 고침되는 것을 방지합니다.

    // 새로운 사용자 객체를 생성합니다.
    const newUser = {
      id: Date.now(), // 현재 시간을 ID로 사용합니다.
      name: name, // 입력된 이름
      age: age, // 입력된 나이
    };

    // 이름이나 나이가 비어있으면 경고 메시지를 표시합니다.
    if (name === "" || age === "") {
      alert("이름과 나이가 모두 입력 되지 않았습니다.");
      return; // 경고 후 함수 종료
    }

    // 새로운 사용자를 기존 사용자 목록에 추가합니다.
    setUsers([...users, newUser]);
    // 추가 후 입력 필드를 초기화합니다.
    setName("");
    setAge("");
  };

  // 사용자를 삭제하는 함수입니다.
  const removeUser = (id) => {
    // 주어진 ID와 일치하지 않는 사용자만 필터링합니다.
    const filteredUser = users.filter((user) => user.id !== id);
    // 필터링된 사용자 목록으로 상태를 업데이트합니다.
    setUsers(filteredUser);
  };

  return (
    <>
      <h1>사용자 리스트</h1> {/* 제목을 표시합니다. */}
      <form onSubmit={addUser}>
        {" "}
        {/* 폼 제출 시 addUser 함수를 호출합니다. */}
        <input
          type="text"
          placeholder="이름" // 이름 입력 필드
          value={name} // 상태에 저장된 이름을 표시합니다.
          onChange={(event) => {
            setName(event.target.value); // 입력값이 변경될 때 상태를 업데이트합니다.
          }}
        />
        <input
          type="number"
          placeholder="나이" // 나이 입력 필드
          value={age} // 상태에 저장된 나이를 표시합니다.
          onChange={(event) => {
            setAge(event.target.value); // 입력값이 변경될 때 상태를 업데이트합니다.
          }}
        />
        <button type="submit">사용자 추가</button> {/* 사용자 추가 버튼 */}
      </form>
      <ul>
        {users.map((item) => {
          // 사용자 목록을 순회합니다.
          return (
            <li key={item.id}>
              {" "}
              {/* 각 사용자 항목에 고유한 키를 부여합니다. */}
              <p>이름 : {item.name}</p> {/* 사용자 이름 표시 */}
              <p>나이 : {item.age}</p> {/* 사용자 나이 표시 */}
              <button onClick={() => removeUser(item.id)}>삭제</button>{" "}
              {/* 삭제 버튼 */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App; // App 컴포넌트를 내보냅니다.
