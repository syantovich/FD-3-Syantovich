import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany';
import clientsArr from '../clientsArr.json';

let companyName = 'MTS'

test('работа кнопки Все', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.findByProps({value: 'Все'});
    // и "нажмём" на неё
    buttonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    // "нажмём" кнопку ещё раз
    buttonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Активные', () => {

    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElem = component.root.findByProps({value: 'Активные'});
    buttonElem.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    buttonElem.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Заблокированные', () => {

    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElem = component.root.findByProps({value: 'Заблокированные'});
    buttonElem.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    buttonElem.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Добавить клиента', () => {

    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElem = component.root.findByProps({value: 'Добавить клиента'});
    buttonElem.props.onClick();

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonAdd = component.root.findByProps({id: 'AddNew'});

    buttonAdd.props.onClick(null,121,"al","sy","ser",400);

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

test('работа кнопки Редактировать клиента', () => {

    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElems = component.root.findAllByProps({value: 'Edit'});
    for(let i=0;i<buttonElems.length;i++){
        buttonElems[0].props.onClick();
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();


        const buttonAdd = component.root.findByProps({id: 'SaveEdit'});
        buttonAdd.props.onClick(null,121+i,"al","sy","ser",400);

        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();
    }

});

test('работа кнопки Удвлит', () => {

    const component = renderer.create(
        <MobileCompany clients={clientsArr} name={companyName}/>
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElems = component.root.findAllByProps({id: 'Delete'});
    for(let i=0;i<buttonElems.length;i++){
        buttonElems[0].props.onClick();
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot();

    }

});