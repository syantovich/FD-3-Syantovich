"use strict";

import React from 'react';
import withRainbowFrame from './withRainbowFrame';

class RaindowFrame extends React.Component{

    render(){
        let FramedFragment=withRainbowFrame(this.props.colors)(React.Fragment);
        return (
            <FramedFragment>
                Hello!
            </FramedFragment>
        )
        
    }
}
export default RaindowFrame;
