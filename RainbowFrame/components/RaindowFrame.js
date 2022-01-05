"use strict";

import React from 'react';
import ColorFrame from './BorderColor';
 
class RaindowFrame extends React.Component{

    render(){
        let div=this.props.children;
        for(let i=this.props.colors.length;i>=0;i--){
            div=<ColorFrame color={this.props.colors[i]}>{div}</ColorFrame>
        }
        return div;
    }
}
export default RaindowFrame;
