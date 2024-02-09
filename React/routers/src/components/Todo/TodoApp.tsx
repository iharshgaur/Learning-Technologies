import { useContext, useEffect, useState, createContext } from "react"
import { Todo, TodoForm } from "./TodoForm"
import { TodoContainer } from "./TodoContainer"


const TodosContext = createContext<Todo[]>([])
const CompletedContext = createContext<Todo[]>([])


export function TodoApp() {
  const [todos, setTodo] = useState<Todo[]>([])
  const [completed, setCompleted] = useState<Todo[]>([])
  
  function handleAddTodo(todo: Todo) {
    setTodo(prevTodos => [...prevTodos, todo])
  }

  function handleDeleteTodo(key: string) {
    setTodo(prevTodos => prevTodos.filter(todo => todo.key !== key))
    setCompleted(prevTodos => prevTodos.filter(todo => todo.key !== key))
  }

  function handleCompleteTodo(todo: Todo) {
    setCompleted(prevCompleted => [...prevCompleted, todo]);
    setTodo(prevTodos => prevTodos.filter(item => item.key !== todo.key));
  }

  useEffect(()=> {
      console.log(todos, completed)
  }, [todos, completed])

  return <TodosContext.Provider value={todos}>
    <CompletedContext.Provider value={completed}>
      <TodoForm handleAddTodo = {handleAddTodo}/>
      <TodoContainer handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo = {handleCompleteTodo}/>
    </CompletedContext.Provider>
  </TodosContext.Provider>
}



export function useTodos() {
  return useContext(TodosContext);
}

export function useCompleted() {
  return useContext(CompletedContext);
}