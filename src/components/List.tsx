interface TodoItem {
  id: number;
  content: string;
}
interface Props {
  todos: TodoItem[];
  deleateTodo:(id:number) => void;
}

const List = ({todos,deleateTodo}:Props) => {

  const compleate = (id:number) => {
    deleateTodo(id)
  }
  return (
    <>
      <div>

        {todos.length === 0 ?
         <div>All clear</div> :
          (todos.map((todo) => {
          return (
            <div key={todo.id}>
              <button onClick={()=> compleate(todo.id)}>完了する</button>
              <span>{todo.content}</span>
            </div>
          );
        }))}


        
      </div>
    </>
  )
};

export default List;