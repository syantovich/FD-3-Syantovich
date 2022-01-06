"use strict";

import React from 'react';
 
class RaindowFrame extends React.Component{

    render(){
        let div=this.props.children;
        for(let i=this.props.colors.length-1;i>=0;i--){
            div=<div style={{border:"solid 1px "+this.props.colors[i],padding:"10px"}}>
            {div}
          </div>;
        }
        return div;
    }
}
export default RaindowFrame;
