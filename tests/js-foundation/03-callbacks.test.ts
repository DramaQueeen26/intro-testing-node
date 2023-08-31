import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => { 

  test('getUserById should return an error if user does not exists', (done) => { 

    const id = 10;
    getUserById( id, (err, user) => {

      expect( err ).toBe(`User not found with id ${id}`)
      expect( user ).toBeUndefined()

      // * El done se llama cuando queramos terminar el test
      done();
    })

  })

}) 
