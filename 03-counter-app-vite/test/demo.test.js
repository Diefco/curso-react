describe('Pruebas en <demoComponent />', () => {
	test('Esta prueba no debe de fallar', () => {
		// Tres pasos en pruebas:
		// 1. Iniciación.
		const message1 = 'Hola Mundo';
		// 2. Estimulo
		const message2 = message1.trim();
		// 3. Observar el comportamiento... esperado.
		expect(message1).toBe(message2);
	});
});
