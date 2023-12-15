
interface EndTask  {
  id: number | null;
  content: string | null;
}
interface Props {
  endTask: EndTask[];
}

const End = ({endTask}:Props) => {
  return (
    <>
      {endTask.map((todo) => {
        return (
          <div key={todo.id}>{todo.content}</div>
        )
      })}
    </>
  )
};

export default End;