
var React=require("react");
var OneProduct=require("./OneProduct");

class MyProduct extends React.Component{
    state = {
        filter:"",

    };
    displayName =  "MyProduct";
    answerChoose=(EO,code)=>{
        this.props.cbChoose(code);
    };
    change(num){
        this.props.cbChangeMode(num);
    }
    delobj=(EO,code)=>{
        EO.stopPropagation();
        this.props.cbDelete(code);
    };
    render(){  
        let spisokProducts=[];
        this.props.spisok.forEach((e,i)=>{
            let item=<OneProduct e={e} key={e.code} code={this.props.code} cbChoose={this.props.cbChoose} cbDelete= {this.props.cbDelete} cbChangeMode={this.props.cbChangeMode} wm={this.props.wm} elemFind={this.props.elemFind} edited={this.props.edited}/>;
            spisokProducts.push(item);
        });
            
        return <div><table><tbody><tr><th>Имя</th><th>Price</th><th>URL</th><th>Quantity</th><th>Control</th></tr>{spisokProducts}</tbody></table>{ (this.props.wm<2)?<button onClick={(EO)=>{this.change(3);this.answerChoose(EO,undefined);}}>Add new item</button>:false}</div>;
    } 
}


module.exports= MyProduct;