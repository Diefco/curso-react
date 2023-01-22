import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Diefco',
		email: 'diefco.web@gmail.com',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
			// [name] propiedad desestructurada del objeto html.
		});
	};

	useEffect(() => {
		// console.log('useEffect Called!');
	}, []);

	useEffect(() => {
		// console.log('formState changed!');
	}, [formState]);

	useEffect(() => {
		// console.log('email changed!');
	}, [email]);

	return (
		<>
			<h1>Simple Form</h1>
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
				placeholder="email@diefco.web"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};
