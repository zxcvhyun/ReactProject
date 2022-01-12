import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  //Dom 요소에 접근하지 않고 멤버 변수를 정의한 뒤 리액트 컴포넌트에 연결함
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); // refresh를 막음
    const name = inputRef.current.value;
    // 이름이 비어있지 않다면 props의 onAdd함수에 이름을 전달
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='please enter your habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default HabitAddForm;
