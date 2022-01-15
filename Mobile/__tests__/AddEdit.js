import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from "../components/MobileClient";
import AddEditClient from "../components/AddEditClient";

test('работа AddEdit', () => {

    const client = { id: 101, FIO: { fam: "Иванов", im: "Иван", otch: "Иванович" }, balance: 200 };

    const component = renderer.create(
        <AddEditClient
            client={client}
            workmode={"Edit"}
            edited={null}
            maxId={102}
        />
    );



    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();


    const buttonSave = component.root.findByProps({ id: "SaveEdit" })
    const buttonCancel = component.root.findByProps({ id: "Cancel" })

    buttonSave.props.onClick();
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonAdd=component.root.findByProps({ id: "AddItem" });
    buttonAdd.props.onClick();
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();


    const buttonCreate = component.root.findByProps({ id: "AddNew" })

    buttonCreate.props.onClick();
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

});