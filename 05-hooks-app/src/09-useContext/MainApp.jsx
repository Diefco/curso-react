import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
// import { Error404 } from './Error404';
import { Navbar } from './Navbar';

export const MainApp = () => {
	return (
		<UserProvider>
			{/* <h1>MainApp</h1>
			<hr /> */}

			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="login" element={<LoginPage />} />

				{/* <Route path="/*" element={<Error404 />} /> */}

				<Route path="/*" element={<Navigate to="/about" />} />
			</Routes>
		</UserProvider>
	);
};
