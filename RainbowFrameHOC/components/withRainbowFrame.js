"use strict";

import React from 'react';
 
function withRainbowFrame(arrColors){
    return Component =>{
        let div=false;
        for(let i=arrColors.length-1;i>=0;i--){
            div=<div style={{border:"solid 1px "+arrColors[i],padding:"10px"}}>
            {div}
          </div>;
        }
        return props=>{
            console.log(props);
            return (<Component>
                <p>{props.children}</p>
            </Component>)
        };
    }
}
export default withRainbowFrame;
