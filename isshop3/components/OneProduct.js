var React=require("react")
class OneProduct extends React.Component{
    render(){
        return<tr className={(this.props.code===this.props.e.code)?"chosen":""} key={this.props.e.code+"-"+ 0} onClick={(EO)=>{if(!this.props.edited&&this.props.wm!=3){this.props.cbChangeMode(1); this.props.cbChoose(EO,this.props.e.code);}}}>
            <td>{this.props.e.name}</td>
            <td>{this.props.e.price}</td>
            <td>{this.props.e.photos[0]}</td>
            <td>{this.props.e.count}</td>
            <td><button onClick={(EO)=>{this.delobj(EO,this.props.e.code)}} disabled={this.props.edited}>Delete</button><button onClick={(EO)=>{EO.stopPropagation();if(this.props.wm!=2 ){this.props.cbChangeMode(2);}this.props.cbChoose(EO,this.props.e.code);}} disabled={this.props.edited}>Edit</button></td>
            </tr>;
    }
}
module.exports=OneProduct;