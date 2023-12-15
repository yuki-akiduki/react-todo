import { useState } from 'react';
import Heading from './Heading';
import List from './List';
import Form from './Form';
import End from './End';
interface TodoItem {
  id: number;
  content: string;
}

const Todo = () => {

  const todoList = [
    {
      id: 1,
      content: '店の予約',
    },
    {
      id: 2,
      content: '美容院の予約',
    },
    {
      id: 3,
      content: '猫を撫でる',
    },
  ];

  const [todos , setTodos] = useState<TodoItem[]>(todoList);
  const [endTask, setEndTask]= useState<TodoItem[]>([]);
  const deleateTodo = (id:number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    const endTodos = todos.filter((todo) => {
      return todo.id === id
    });
    setTodos(newTodos);
    setEndTask([...endTask, ...endTodos]);
  }

  const createTodo = (todo:TodoItem) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <Heading text = 'これは見出しです'/>
      <List todos = {todos} deleateTodo = {deleateTodo} />
      <Form createTodo = {createTodo} />
      <End endTask = {endTask} />
    </>
  )
};

export default Todo;
