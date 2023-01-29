import { useState } from 'react';
import { UserContext } from './userContext';

// const user = {
// 	id: 123,
// 	name: 'Diego Díaz',
// 	email: 'Diego@google.com',
// };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		// <UserContext.Provider value={{ hola: 'Mundo', user }}>
		// 	{children}
		// </UserContext.Provider>

		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
