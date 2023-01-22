import { useCounter, useFetch } from '../hooks/index.js';
import { LoadingQuote, Quote } from '../03-examples'; // index.jsx

export const Layout = (url) => {
	const { counter, increment } = useCounter(1);

	const { data, isLoading, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{isLoading ? (
				<LoadingQuote />
			) : (
				<Quote quote={quote} author={author} />
			)}

			<button
				onClick={() => increment(1)}
				disabled={isLoading}
				className="btn btn-primary">
				Next quote
			</button>
		</>
	);
};
