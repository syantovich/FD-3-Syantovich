import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from "../components/MobileCompany";
import clientsArr from "../clientsArr.json"

test('работа ExampleComponent', () => {

    const component = renderer.create(
        <MobileCompany      name="Velcom"
                            clients={clientsArr}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();


    let buttonClicked=component.find({id:"all"});
    buttonClicked.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();






});