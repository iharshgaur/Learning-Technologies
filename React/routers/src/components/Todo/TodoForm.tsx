import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid"


export type Todo = {
  key: string,
  task: string
}

interface TodoFormProps {
  handleAddTodo: (todo: Todo) => void;
}

export function TodoForm(props: TodoFormProps) {
  const { handleAddTodo } = props
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<any>(null)


  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input.trim() !== "") {
      handleAddTodo({
        key: uuidv4(),
        task: input
      });
      setInput("");
    }
  }

  useEffect(()=> {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={input} onChange={handleChangeInput} placeholder="Type here..." />
      <button type="submit">Add</button>
    </form>
  );
}
