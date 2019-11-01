import React from 'react';
import {shallow} from 'enzyme';
import {FindTestValue, checkProps } from './../../utils';
import MovieList from './index';

const getComponent = (props={}) => {
    const component = shallow(<MovieList {...props}/>);
    return component;
};

describe('MovieList component',() => { 
    describe('Checking props types',() => { 
  
        it('Should not through a warning',() => {
            const handleSubmit = jest.fn();
            const expectedProps = {
                popularity: 432.456,
                poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
                title: 'Joker',
                overview: 'During the 1980s.',
                id:1234,
                clickButton:handleSubmit,
                favMenu:false,
                watchMenu:false,
                favList:[],
                watchList:[]
            };

            const propsErr = checkProps(MovieList, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    });

    describe('MovieList component with valid props value',() => { 
        let component;
        beforeEach(()=> {
            const handleSubmit = jest.fn();
            const props = {
                popularity: 432.456,
                poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
                title: 'Joker',
                overview: 'During the 1980s.',
                id:1234,
                clickButton:handleSubmit
            };
            component = getComponent(props);
        });

        it('Should render without errors',() => {
            const container = FindTestValue(component,'component-movielist-li');
            expect(container.length).toBe(1);
        });
        it('Should render the poster image',() => {
            const container = FindTestValue(component,'component-movielist-img');
            expect(container.length).toBe(1);
        });
        it('Should not render the default poster image',() => {
            const container = FindTestValue(component,'component-movielist-img-default');
            expect(container.length).toBe(0);
        });
        it('Should render the title',() => {
            const container = FindTestValue(component,'component-movielist-title');
            expect(container.length).toBe(1);
        });
        it('Should render the overview',() => {
            const container = FindTestValue(component,'component-movielist-text');
            expect(container.length).toBe(1);
        });

        it('Should render the good movie label',() => {
            const container = FindTestValue(component,'component-movielist-good');
            expect(container.length).toBe(1);
        });
        
        it('Should not render the bad movie label',() => {
            const container = FindTestValue(component,'component-movielist-bad');
            expect(container.length).toBe(0);
        });
    });

    describe('MovieList component with movie popularity less tban 2',() => { 
        let component;
        beforeEach(()=> {
            const handleSubmit = jest.fn();
            const props = {
                popularity: 1,
                poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
                title: 'Joker',
                overview: 'During the 1980s.',
                id:1234,
                clickButton:handleSubmit
            };
            component = getComponent(props);
        });

        it('Should render the bad movie label',() => {
            const container = FindTestValue(component,'component-movielist-bad');
            expect(container.length).toBe(1);
        });
        it('Should not render the good movie label',() => {
            const container = FindTestValue(component,'component-movielist-good');
            expect(container.length).toBe(0);
        });
  
    });

    describe('MovieList component with movie poster_path empty',() => { 
        let component;
        beforeEach(()=> {
            const handleSubmit = jest.fn();
            const props = {
                popularity: 1,
                poster_path: null,
                title: 'Joker',
                overview: 'During the 1980s.',
                id:1234,
                clickButton:handleSubmit,
                favMenu:false,
                watchMenu:false,
                favList:[],
                watchList:[]
            };            component = getComponent(props);
        });

        it('Should render the default poster image',() => {
            const container = FindTestValue(component,'component-movielist-img-default');
            expect(container.length).toBe(1);
        });
  
    });

    describe('MovieList component without props value',() => { 
        let component;
        beforeEach(()=> {
                component = getComponent();
                
        });
        it('Should not render movielist row if title is missing',() => {
            const container = FindTestValue(component,'component-movielist-li');
            expect(container.length).toBe(0);
        });
    });
});