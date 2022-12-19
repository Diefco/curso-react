import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
	test('getHeroeById debe de retornar un heroe por ID', () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({
			id: 1,
			name: 'Batman',
			owner: 'DC',
		});
	});

	test('getHeroeById debe de retornar undefined si no existe un heroe en el id', () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();
	});

	// Tarea:
	// Debe retornar un arreglo con los héroes de DC.
	// Length === 3
	// toEqual al arreglo filtrado.

	// debe de retornar un arreglo con los héroes de Marvel
	// length === 2

	test('getHeroesByOwner debe retornar un arreglo con los 3 héroes de DC', () => {
		const owner = 'DC';
		const heroesDC = getHeroesByOwner(owner);

		expect(heroesDC).toHaveLength(3);
		expect(heroesDC).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);

		expect(heroesDC).toEqual(
			heroes.filter((heroe) => heroe.owner === owner)
		);
	});

	test('getHeroesByOwner debe retornar 2 objetos en el array', () => {
		const heroesMarvel = getHeroesByOwner('Marvel');

		expect(heroesMarvel).toHaveLength(2);
	});
});
