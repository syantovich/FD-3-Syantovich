"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';
import RaindowFrame from "./components/RaindowFrame"

import string from "./string.json";

ReactDOM.render(
<RaindowFrame string={string}></RaindowFrame>, 
    document.getElementById('container') 
  );
