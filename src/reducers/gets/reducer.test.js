import { types } from './../../actions/types';
import getsReducer from './reducer';

describe('Gets Reducer', () => {

    it('Should return default state', () => {
        const newState = getsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {

        const gets = [{ title: 'Test 1'}, { title: 'Test 2'}, { title: 'Test 3'}];
        const newState = getsReducer(undefined, {
            type: types.GET_MOVIES,
            payload: gets
        });
        expect(newState).toEqual(gets);

    });

});