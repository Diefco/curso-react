import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
	const {
		todos,
		handleDeleteTodo,
		handleNewTodo,
		handleToggleTodo,
		todosCount,
		pendingTodosCount,
	} = useTodos();

	return (
		<>
			<h1>
				TodoApp: {todosCount}, Pendientes: {pendingTodosCount}
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
