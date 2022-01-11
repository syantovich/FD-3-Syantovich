
import React from "react";

class DoubleButton extends React.Component{
    state={
        caption1:this.props.caption1 ,
        caption2:this.props.caption2,
        cbPressed:this.props.cbPressed 
    }
    render(){
        return <React.Fragment>
            <input type="button" value={this.state.caption1} onClick={()=>{this.state.cbPressed(this.state.caption1)}}></input>
                {this.props.children}
                <input type="button" value={this.state.caption2} onClick={()=>{this.state.cbPressed(this.state.caption2)}}></input>
        </React.Fragment>
        
                }
}

export default DoubleButton;