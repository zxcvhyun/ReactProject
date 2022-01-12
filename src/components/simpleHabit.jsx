import React, { useState, useRef, useCallback, useEffect } from 'react';
// React Hook
const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // 한번만 만들고 메모리에 저장한 뒤 그것을 재사용 함

  // useCallback : 자동으로 캐시해서 반복해서 호출되어도 동일한 콜백함수를 전달한다
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // 두번째 인자가 변경 될때마다 useEffect 함수가 호출됨
  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, []);
  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
