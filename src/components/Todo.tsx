import Heading from './Heading';
import List from './List';
import Form from './From';
import End from './End';

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

  return (
    <>
      <Heading text = 'これは見出しです'/>
      <List />
      <Form />
      <End />
    </>
  )
};

export default Todo;
