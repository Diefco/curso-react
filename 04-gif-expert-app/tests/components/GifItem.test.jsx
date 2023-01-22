import { getByRole, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
	const title = 'One Punch Man GIF';
	const url =
		'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=bad64f40fd2kor2gyc5be3eorxku8felbuhvhg8bqd6kqoe4&amp;rid=giphy.gif&amp;ct=g';

	test('Debe de coincidir con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar la imagen con el url y el alt indicado', () => {
		render(<GifItem title={title} url={url} />);
		//screen.debug();
		// expect(screen.getByRole('img').src).toBe(url);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('debe de mostrar el titulo del componente', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
