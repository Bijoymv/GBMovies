import React from 'react';
import {shallow} from 'enzyme';
import FindTestValue from './../../utils/FindTestValue';
import Header from './index';

const getComponent = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header conponent',() => { 
    let component;
    beforeEach(()=> {
        component = getComponent();
    });
    
    it('Should render without errors',() => {
        const container = FindTestValue(component,'comp-header-container');
        expect(container.length).toBe(1);
    });

    it('Should render logos in the header',() => {
        //console.log(component.debug());
        const container = FindTestValue(component,'comp-header-logo');
        expect(container.length).toBe(1);
    });

});