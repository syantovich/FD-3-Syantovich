"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import clientsArr from "./clientsArr.json"
import MobileCompany from './components/MobileCompany';

let companyName='Velcom';

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

