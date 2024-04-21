import { Task } from '@/types'
import React from 'react'
import Todo from './Todo';

interface TaskListProps {
	todos: Task[];
}

const TodoList = ({todos}: TaskListProps) => {
	return (
		<ul className='space-y-3'>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
		)
	}
	export default TodoList