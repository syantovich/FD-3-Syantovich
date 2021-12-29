
var React=require("react");


class AddEdditItem extends React.Component{

    displayName =  "AddEdditItem";
    state={
        code:this.props.code,
        el:false,
    }
    createArrValueOfInput=(el) => {
        let code1;
        if (el==undefined){code1=document.getElementById("code").value}else{code1=el.code}
        let name1=document.getElementById("name");
        let price1=document.getElementById("price");
        let url1=document.getElementById("url");
        let quantity1=document.getElementById("quantity");
        return{
            code:code1,
            name:name1.value,
            price:price1.value,
            photos:[url1.value],
            count:quantity1.value,
        }
    }
    render(){
        let el=this.props.spisok.find(this.props.elemFind);
        
        if (this.props.workmode==2&&el==undefined)return false;
        let nameBlock=<p>{(this.props.workmode==2)?"Eddit existing Product":"Add new product"}</p>;
        let code=(this.props.workmode==3)?<label>Code: <input type="number" id="code"/></label>:<p>Code:{el.code}</p>
        let name=<label>Name: <input type="text" id="name" defaultValue={(this.props.workmode==2)?el.name:""}/></label>
        let price=<label>Price: <input type="number" id="price" defaultValue={(this.props.workmode==2)?el.price:""}/></label>
        let url1=<label>URL Photo1: <input type="text" id="url" defaultValue={(this.props.workmode==2)?el.photos[0]:""}/></label>
        let count=<label>Quantity: <input type="number" id="quantity" defaultValue={(this.props.workmode==2)?el.count:""}/></label>

        return (
            <div key={(this.props.workmode==2)?el.code:-1}>
                {nameBlock}<br/>
                {code}<br/>
                {name}<br/>
                {price}<br/>
                {url1}<br/>
                {count}<br/>
                <button onClick={()=>{this.props.cbSave(this.createArrValueOfInput(el));}}>Save</button>
            </div>
        );
        
    } 
}
module.exports= AddEdditItem;