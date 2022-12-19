import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
	test('usContext deberia devolver un objeto', () => {
		const clave = 'Diefco';
		const nombre = 'Diego';
		const edad = 27;

		const context = usContext({ clave, nombre, edad });

		expect(context).toEqual({
			nombreClave: clave,
			anios: edad,
			latlng: { lat: 14.1232, lng: -12.3232 },
		});
	});
});
