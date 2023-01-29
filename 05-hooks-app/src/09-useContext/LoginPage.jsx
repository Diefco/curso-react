import { useContext } from 'react';
import { json } from 'react-router-dom';
import { UserContext } from './context/userContext';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	console.log(user);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: 123,
						name: 'Francisco',
						email: 'Francisco@email.com',
					})
				}>
				{' '}
				Establecer usuario
			</button>
		</>
	);
};
