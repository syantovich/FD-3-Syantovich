import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from "../components/MobileClient";

test('работа MobileClient', () => {

    const client = { id: 101, FIO: { fam: "Иванов", im: "Иван", otch: "Иванович" }, balance: 200 };

    const component = renderer.create(
        <MobileClient client={client} />
    );

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonEdit = component.root.findByProps({className:"Edit101"})
    const buttonDelete = component.root.findByProps({className:"Delete101"})


    buttonEdit.props.onClick();
    buttonDelete.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();


    buttonEdit.props.onClick();
    buttonDelete.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();


});