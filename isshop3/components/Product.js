
var React=require("react");

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
            let item=<tr className={(this.props.code===e.code)?"chosen":""} key={e.photos[0]} onClick={(EO)=>{this.change(1); this.answerChoose(EO,e.code);}}>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td>{e.photos[0]}</td>
            <td>{e.count}</td>
            <td><button onClick={(EO)=>{this.delobj(EO,e.code)}}>Delete</button><button onClick={(EO)=>{EO.stopPropagation();if(this.props.wm!=2 ){this.change(2);}this.answerChoose(EO,e.code);}}>Edit</button></td>
            </tr>;
            spisokProducts.push(item);
        });
            
        return <div><table><tbody><tr><th>Имя</th><th>Price</th><th>URL</th><th>Quantity</th><th>Control</th></tr>{spisokProducts}</tbody></table><button onClick={(EO)=>{this.change(3);this.answerChoose(EO,undefined);}}>Add new item</button></div>;
    } 
}


module.exports= MyProduct;