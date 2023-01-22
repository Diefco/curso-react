import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
	const { formState, onInputChange, onResetForm, username, email, password } =
		useForm({
			username: '',
			email: '',
			password: '',
		});

	// const { username, email, password } = formState;

	return (
		<>
			<h1>Form With Custom Hook</h1>
			<hr />

			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>

			{
				// Si existe el usuario muestre el componente.
				username === 'Diefco2' && <Message />
			}

			<input
				type="email"
				className="form-control mt-2"
				placeholder="Correo electronico"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			<input
				type="password"
				className="form-control mt-2"
				placeholder="Contraseña"
				name="password"
				value={password}
				onChange={onInputChange}
			/>

			<button onClick={onResetForm} className="btn btn-primary mt-2">
				Borrar
			</button>
		</>
	);
};
