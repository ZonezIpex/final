import React, { useState } from 'react'; // 리엑트에서 useState를 쓰겠다고 선언(삽입)

function CombinedComponent() {
  const [status, setStatus] = useState('on'); 

  const [count, setCount] = useState(0); 

  const handleToggle = () => {
    setStatus(prevStatus => (prevStatus === 'on' ? 'off' : 'on')); // 상태를 토글하는 함수
  };

  // 카운터 버튼 클릭 핸들러 함수
  // 버튼을 클릭할 때마다 count 값을 1씩 증가시킵니다
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>현재 상태: {status}</p>
      <button onClick={handleToggle}> 
        상태 토글
      </button>

      <hr />

      <button onClick={handleClick}>
        클릭 수: {count}
      </button>
    </div>
  );
}

export default CombinedComponent;

