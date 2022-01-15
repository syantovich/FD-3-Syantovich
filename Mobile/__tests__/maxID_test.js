"use strict"

import {maxClientsID} from "../modules/maxClientsID";
import clientsArr from "../clientsArr.json"

test("Тестирование функции по нахождению максимального id клиента +1",()=>{
    expect(maxClientsID(clientsArr)).toBe(121);
    expect(maxClientsID([{id:12},{id:2},{id:3},{id:213},{id:22},{id:55},{id:7},{id:889},{id:4},{id:16},{id:28}])).toBe(890);
})