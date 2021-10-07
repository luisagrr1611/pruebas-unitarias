
describe('Probando Jest', () => {

    test('Prueba de objetos iguales', () => {

        const datos1 = {
            nombre: 'Luis Daniel',
            edad: 23
        };

        const datos2 = {
            nombre: 'Luis Daniel',
            edad: 23
        };

        expect(datos1).toEqual(datos2);
    })
    
});