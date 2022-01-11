"use strict";

import React from 'react';
 
function withRainbowFrame(arrColors){
    return Component =>{
        return props=>{
            let div=props.children;
            for(let i=arrColors.length-1;i>=0;i--){
                div=<div style={{border:"solid 1px "+arrColors[i],padding:"10px"}}>
                {div}
              </div>;
            }
            console.log(props);
            return (<Component>
                {div}
            </Component>)
        };
    }
}
export default withRainbowFrame;
