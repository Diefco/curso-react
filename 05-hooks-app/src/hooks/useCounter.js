import { useState } from 'react';

export const useCounter = (initualValue = 10) => {
	const [counter, setCounter] = useState(initualValue);

	const increment = (value = 1) => {
		setCounter(counter + value);
	};

	const decrement = (value = 1) => {
		if (counter === 0) return;

		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initualValue);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
