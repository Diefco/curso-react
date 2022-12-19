// import { Fragment } from 'react';
import PropTypes from 'prop-types';

// const getResult = (a, b) => {
// 	return 'Diego';
// };

export const FirstApp = ({ title, subTitle, name }) => {
	// console.log(title);

	return (
		// <Fragment>
		// 	<h1>Diego</h1>
		// 	<p>Soy un subtitulo</p>
		// </Fragment>
		// Lo mismo que fragment sin realizar import
		<>
			<h1 data-testid="test-title">{title}</h1>
			{/* <code>{JSON.stringify(newMessage)}</code> */}
			<p> {subTitle} </p>
			<p> {subTitle} </p>
			<p> {name} </p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	// subTitle: PropTypes.number,
};

FirstApp.defaultProps = {
	// title: 'No hay title',
	subTitle: 'No hay subTitle',
	name: 'Diego Díaz',
};
