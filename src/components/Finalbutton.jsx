import React, { useState } from 'react'; // 리엑트에서 useState를 쓰겠다고 선언(삽입)

function CounterButton() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      클릭 수: {count}
    </button>
  );
}

// 버튼을 클릭하는걸 onClick으로 받고, handleClick으로 함수를 실행

export default CounterButton;
