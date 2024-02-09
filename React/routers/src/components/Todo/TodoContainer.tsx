import { Todo } from "./TodoForm"
import { TodoList } from "./TodoList"
import { useCompleted, useTodos } from "./TodoApp"

export function TodoContainer(props: any) {
  const todos = useTodos()
  const completed = useCompleted()
  const {handleDeleteTodo, handleCompleteTodo} = props
  return <>
    <div>
      <h2>TBD</h2>
      {todos.length > 0 ? todos.map((todo: Todo) => (
        <TodoList
          key={todo.key}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      )) : null}
    </div>
    <div>
      <h2> Done </h2>
      {completed.map((todo: Todo) => <div key={todo.key}>
        <li >{todo.task}</li>
        <button onClick={() => handleDeleteTodo(todo.key)}> Delete </button>
      </div>)}

    </div>
  </>
}