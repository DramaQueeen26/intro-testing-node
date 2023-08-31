import { getPokemonById } from '../../src/js-foundation/06-promises';
describe('js-foundation/06-promises.ts', () => { 

  test('getPokemonById should return a pokemon', async () => { 

    const pokemonId = 1;
    const pokemonName = await getPokemonById( 1 );

    expect( pokemonName ).toBe('bulbasaur')

  })

  test('should return an error if pokemon does not exists', async () => {

    const pokemonId = 1000000;
    
    try {
      
      const pokemonName = await getPokemonById( pokemonId );
      expect( true ).toBeFalsy()
    
    } catch (error) {
      
      expect( error ).toBe(`Pokemon with id ${pokemonId} not found`)

    }



  })

})