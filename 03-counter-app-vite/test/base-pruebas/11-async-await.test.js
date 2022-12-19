import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas de 11-async-await', () => {
	test('getImagen debe de retortnar un URL de la imagen', async () => {
		const url = await getImagen();
		console.log(url);

		expect(typeof url).toBe('string');
	});

	test('getImagen debe de retortnar un error si no tenemos api Key', async () => {
		const resp = await getImagen();
		expect(resp).toBe('No se encontro la imagen');
	});
});
