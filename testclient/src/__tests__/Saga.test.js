import { stubClient } from '../stub-api';

    describe('add filter action', () => {

        it('add filter action1',   async () => {  
            const data = await stubClient.getMovieDetails('A Very English Scandal')

            //await expect().resolves.toEqual('A Very English Scandal')     
            expect(data.name).toEqual('A Very English Scandal')    

      })
    })