import {getGifs} from '../../helpers/getGifs'

describe('pruebas con getGifs Fetch', () => {

    test('debe traer 10 elementos', async() => {

        const gifs= await getGifs('Dragon Ball');
        
        expect(gifs.length).toBe(10)
        
    })
    
    
})
