export function TodoList(props: any) {
  const {todo, handleDeleteTodo, handleCompleteTodo} = props

  return <div>
    <li> {todo.task} </li>
    <button onClick={(() => handleDeleteTodo(todo.key))}>Delete</button>
    <button  onClick={(() => handleCompleteTodo(todo))}>Mark Done</button>
  </div>
}