import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	test('Validamos textos iniciales del componente e input text', () => {
		render(<GifExpertApp />);

		expect(screen.getByText('GifExpertApp'));
	});
});
