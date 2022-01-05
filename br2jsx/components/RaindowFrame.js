"use strict";

import React from 'react';
import Br2jsx from './Br2jsx';

import "./RaindowFrame.css";
class RaindowFrame extends React.Component{

    render(){
            return <div className='divwithtext'> <Br2jsx string={this.props.string}></Br2jsx></div>
    }
}
export default RaindowFrame;
