"use strict";

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import RaindowFrame from './components/RaindowFrame';
import DoubleButton from './components/DoubleButton';

import arrayOfColors from "./arrayOfColors.json";
import string from "./string.json";

console.log(arrayOfColors)
ReactDOM.render(<Fragment>
<DoubleButton caption1={"однажды"} caption2={"в студеную"} cbPressed={(str)=>(alert(str))}> Зимнюю пору</DoubleButton>
  <RaindowFrame colors={arrayOfColors} >{string}</RaindowFrame>
</Fragment>,

    document.getElementById('container') 
  );