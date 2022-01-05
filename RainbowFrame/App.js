"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RaindowFrame from './components/RaindowFrame';

import arrayOfColors from "./arrayOfColors.json";
import string from "./string.json";

console.log(arrayOfColors)
ReactDOM.render(
<RaindowFrame colors={arrayOfColors}>{string}</RaindowFrame>, 
    document.getElementById('container') 
  );