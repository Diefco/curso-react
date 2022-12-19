import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

// Renderizando el componente
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <HelloWorldApp /> */}
		{/* <FirstApp title="Hola, Soy vegeta" /> */}
		<CounterApp value={20} />
	</React.StrictMode>
);
