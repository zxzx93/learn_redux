//컨테이너 컴포넌트 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,toggleTodo } from '../modules/todos';
import Todos from '../components/Todos';

function TodosContainer() {

  //스토어에서 상태 ,액션 함수 가져오기
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) =>{dispatch(addTodo(text))}; 
  const onToggle = id =>{dispatch(toggleTodo(id))};

  return (
   <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
  );
}

export default TodosContainer;