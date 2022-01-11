"use strict";

import React from 'react';
import withRainbowFrame from './withRainbowFrame';
import DoubleButton from './DoubleButton';

class RaindowFrame extends React.Component{

    render(){

        let FramedFragment=withRainbowFrame(this.props.colors)(DoubleButton);
        return <FramedFragment caption1={"Hi"} caption2={"Good bye"} cbPressed={(str)=>(alert(str))}>
                Hello!
            </FramedFragment>
            
        
        
    }
}
export default RaindowFrame;
