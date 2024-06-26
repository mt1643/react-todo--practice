"use client"

import { editTodo, deleteTodo } from '@/api';
import { Task } from '@/types'
import React, { useEffect, useRef, useState } from 'react'

interface TodoProps {
  todo: Task;
}

const Todo = ({todo}: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIdEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text)

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  })

  const handleEdit = async () => {
    setIdEditing(true)
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIdEditing(false)
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  }

  return (
    <li
      key={todo.id}
      className='flex justify-between p-4 bg-white border-blue-500 rounded shadow border-l-4'
    >
      {isEditing ? (
        <input
          ref={ref}
          type='text'
          className='mr-2 py-1 rounded border-gray-400 border'
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
          />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
        <button className='text-blue-500 mr-3' onClick={handleSave}>save</button>
        ) : (
          <button className='text-green-500 mr-3' onClick={handleEdit}>edit</button>
        )}
        <button className='text-red-500' onClick={handleDelete}>Delete</button>
      </div>
    </li>
  )
}

export default Todo