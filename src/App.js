import './App.css';
import { useState, useRef } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
function App() {
//CreateUser의 입력 인풋을 상태관리
const [ inputs, setInputs ] = useState({
  todo: '',
});
const onChange = (e) => {
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name]: value,
  })
  console.log(inputs);
}
const {todo} = inputs;
//useState()실행 -> 배열 return
//arr[0] = 상태
//arr[1] = 상태를 변경해주는 f
const [users,setUsers] = useState([

])
const nextId = useRef(1);
//배열에 새로운 항목을 추가하는 함수
//users 배열에 새로운 user 객체를 추가
const onCreate = () => {
  //새로운 user 객체 생성
  const user = {
    id: nextId.current,
    todo, // = username: username
    active: false,
  }
  setUsers([...users,user]);
  setInputs({
    todo: '',
  })
  nextId.current += 1;
}
const onDelete = (id) => {
  setUsers(users.filter(user=>id !== user.id));
}
const onToggle = (id) => {
  setUsers(users.map(user=> id ===user.id? {...user, active : !user.active} : user));
}
  return (
    <div className="App">
        <CreateTodo todo={todo} onChange={onChange} 
        onCreate={onCreate}></CreateTodo>
        <TodoList users={users} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
