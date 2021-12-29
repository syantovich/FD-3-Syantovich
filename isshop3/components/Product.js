
var React=require("react");

class MyProduct extends React.Component{
    state = {
        filter:"",
    };
    displayName =  "MyProduct";
    answerChoose=(EO)=>{
        this.props.cbChoose(this.props.el.code);
    };
    change(num){
        this.props.cbChangeMode(num);
    }
    delobj=(EO)=>{
        EO.stopPropagation();
        this.props.cbDelete(this.props.el.code);
    };
    render(){  

        return <tr className={(this.props.isClicked===this.props.el.code)?"chosen":""} onClick={()=>{this.change(1);this.answerChoose();}}>
        <td>{this.props.el.name}</td>
        <td>{this.props.el.price}</td>
        <td>{this.props.el.photos[0]}</td>
        <td>{this.props.el.count}</td>
        <td><button onClick={this.delobj}>Delete</button><button onClick={(EO)=>{EO.stopPropagation();this.answerChoose();if(this.props.wm!=2 ){this.change(2);}}}>Edit</button></td>
        </tr>;
        
    } 
}


module.exports= MyProduct;