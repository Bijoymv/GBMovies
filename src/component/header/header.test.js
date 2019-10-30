import React from 'react';
import {shallow} from 'enzyme';
import {FindTestValue, checkProps } from './../../utils';
import Header from './index';

const getComponent = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header component',() => { 

    describe('Checking props types',() => { 
  
        it('Should not through a warning',() => {
            const handleClick = jest.fn();
            const expectedProps = {
                    clickMenu:handleClick
                };

            const propsErr = checkProps(Header, expectedProps)
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Header component with props value',() => { 
            let component;
            beforeEach(()=> {
                const handleClick = jest.fn();
                const props = {
                                clickMenu:handleClick
                              }
                component = getComponent(props);
            });

            it('Should render without errors',() => {
                const container = FindTestValue(component,'comp-header-container');
                expect(container.length).toBe(1);
            });
            it('Should render a nav container',() => {
                const container = FindTestValue(component,'comp-nav-container');
                expect(container.length).toBe(1);
            });
            it('Should render a header nav',() => {
                const container = FindTestValue(component,'comp-header-nav');
                expect(container.length).toBe(1);
            });
            it('Should render brandname',() => {
                const container = FindTestValue(component,'comp-header-brandname');
                expect(container.length).toBe(1);
            });
            it('Should render a logo container',() => {
                const container = FindTestValue(component,'comp-header-logo-container');
                expect(container.length).toBe(1);
            });
            it('Should render a logo in the header',() => {
                const container = FindTestValue(component,'comp-header-logo');
                expect(container.length).toBe(1);
            });
            it('Should render a toggle nav',() => {
                const container = FindTestValue(component,'comp-header-nav-toggle');
                expect(container.length).toBe(1);
            });
            it('Should render a collapse nav',() => {
                const container = FindTestValue(component,'comp-header-nav-collapse');
                expect(container.length).toBe(1);
            });
            it('Should render a inner nav inside collapse nav',() => {
                const container = FindTestValue(component,'comp-header-nav-collapse-inner');
                expect(container.length).toBe(1);
            });
            it('Should render a home menu',() => {
                const container = FindTestValue(component,'comp-header-menu-home');
                expect(container.length).toBe(1);
            });
            it('Should render a watch later menu',() => {
                const container = FindTestValue(component,'comp-header-menu-watch');
                expect(container.length).toBe(1);
            });
            it('Should render a favourite menu',() => {
                const container = FindTestValue(component,'comp-header-menu-fav');
                expect(container.length).toBe(1);
            });
    });

    describe('Header component without props value',() => { 
        let component;
        beforeEach(()=> {
                component = getComponent();
                
        });
        it('Should not render the header',() => {
            const container = FindTestValue(component,'comp-header-container');
            expect(container.length).toBe(0);
        });
    });
});