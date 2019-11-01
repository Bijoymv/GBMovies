import { types } from '../../actions/types';
import getsReducer from './reducer';

describe('Gets Reducer Test', () => {
    const initialstate = {
        favMenu: false,
        watchMenu:false,
        favList:[],
        watchList:[],
        results:[]
    };

    it('Should return default state', () => {
        const newState = getsReducer(undefined, {});
        expect(newState).toEqual(initialstate);
    });

    it('Should return new state if receiving type', () => {
        const actionresult = {
                popularity: 432.456,
                poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                title: "Joker",
                overview: "During the 1980s.",
                id: 123
        };
        const gets = {
                results: actionresult,
                favMenu: false,
                watchMenu:false,
                favList:[],
                watchList:[]
        };
        const newState = getsReducer(undefined, {
            type: types.GET_MOVIES,
            payload: actionresult
        });
        expect(newState).toEqual(gets);
    });

    it('Should return state with favMenu true and favlist empty array if localstorage is null', () => {
        const gets = {
            results:[],
            favMenu: true,
            watchMenu:false,
            favList:[],
            watchList:[]
        };
        const newState = getsReducer(undefined, {
            type: types.GET_FAV_LIST,
            payload: []
        });
        expect(newState).toEqual(gets);
    });

    it('Should return new state with watchMenu true and watchList empty array if localstorage storage is null', () => {
        const gets = {     
            favMenu: false,
            watchMenu:true,
            favList:[],
            watchList:[],
            results:[]
        };
        const newState = getsReducer(undefined, {
            type: types.GET_WATCH_LIST,
            payload: []
        });
        expect(newState).toEqual(gets);
    });

    it('Should return new state with watchMenu true also with watchList array with localstorage', () => {
        const actionresult = {
            popularity: 432.456,
            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            title: "Joker",
            overview: "During the 1980s.",
            id: 123
            };
        const gets = {
                results: actionresult,
                favMenu: false,
                watchMenu:true,
                favList:[],
                watchList:actionresult
        };
        const newState = getsReducer(undefined, {
            type: types.GET_WATCH_LIST,
            payload: actionresult
        });
        expect(newState).toEqual(gets);
    });

    it('Should return new state with favMenu true also favList array filled with localstorage', () => {
        const actionresult = {
            popularity: 432.456,
            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            title: "Joker",
            overview: "During the 1980s.",
            id: 123
            };
        const gets = {
                results: actionresult,
                favMenu: true,
                watchMenu:false,
                watchList:[],
                favList:actionresult
        };
        const newState = getsReducer(undefined, {
            type: types.GET_FAV_LIST,
            payload: actionresult
        });
        expect(newState).toEqual(gets);
    });

});