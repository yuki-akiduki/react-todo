import { useState } from 'react';

interface TodoItem {
  id: number;
  content: string;
}
interface Props {
  createTodo: (todo: TodoItem) => void;
}

const Form = ({createTodo}:Props) => {
  const [enterTodo, setEnterTodo] = useState('');
  const addTodo = () =>{
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enterTodo
    }
    createTodo(newTodo);
  }
  return (
    <>
      <input type="text" value={enterTodo} onChange={(e) => {
        setEnterTodo(e.target.value)
      }}/>
      <button onClick={addTodo}>追加する</button>
    </>
  )
};

export default Form;