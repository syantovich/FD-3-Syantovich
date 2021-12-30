
var React=require("react");


class AddEdditItem extends React.Component{

    displayName =  "AddEdditItem";
    state={
        valid:this.props.valid,

    }
    answerChoose=(EO,code)=>{
        this.props.cbChoose(code);
    };
    change(num){
        this.props.cbChangeMode(num);
    };
    validInput=(id)=>{
        let el=document.getElementById(id);
        let parEl=el.parentNode;
        if(el.value==""){
            let myValid={};
            for ( let key in this.state.valid){
                myValid[key]=this.state.valid[key];
            }
            myValid[`${id}`]=true;
            console.log(myValid);

            this.setState({valid:myValid});
        }else{
            let myValid={};
            for (let key in this.state.valid){
                myValid[key]=this.state.valid[key];
            }
            delete myValid[`${id}`];
            this.setState({valid:myValid});
        }


    }
    createArrValueOfInput=(el) => {
        let code1;
        
        if (el!=undefined){code1=el.code}
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
        let el=this.props.el;
        if (this.props.workmode==2&&el==undefined)return false;
        let nameBlock=<p>{(this.props.workmode==2)?"Eddit existing Product":"Add new product"}</p>;
        let code=(this.props.workmode==3)?<p>Code:{this.props.maxCode+1}</p>:<p>Code:{el.code}</p>
        let name=<label>Name: <input type="text" id="name" defaultValue={(this.props.workmode==2)?el.name:"" } onChange={()=>{this.validInput("name");this.props.cbEdited(true);}}/>{this.state.valid["name"]&&"Please check this value"}</label>
        let price=<label>Price: <input type="number" id="price" defaultValue={(this.props.workmode==2)?el.price:""} onChange={()=>{this.validInput("price");this.props.cbEdited(true);}}/>{this.state.valid["price"]&&"Please check this value"}</label>
        let url1=<label>URL Photo1: <input type="text" id="url" defaultValue={(this.props.workmode==2)?el.photos[0]:""} onChange={()=>{this.validInput("url");this.props.cbEdited(true);}}/>{this.state.valid["url"]&&"Please check this value"}</label>
        let count=<label>Quantity: <input type="number" id="quantity" defaultValue={(this.props.workmode==2)?el.count:""} onChange={()=>{this.validInput("quantity");this.props.cbEdited(true);}}/>{this.state.valid["quantity"]&&"Please check this value"}</label>
console.log(this.state.valid["name"])
        return (
            <div key={(this.props.workmode==2)?el.code:-1}>
                {nameBlock}<br/>
                {code}<br/>
                {name}<br/>
                {price}<br/>
                {url1}<br/>
                {count}<br/>
                {this.props.workmode==2&&<button onClick={()=>{this.props.cbSave(this.createArrValueOfInput(el),"s");}} disabled={!!Object.keys(this.state.valid).length}>Save</button>}
                {this.props.workmode==3&&<button onClick={()=>{this.props.cbSave(this.createArrValueOfInput(el),"ad");}} disabled={!!Object.keys(this.state.valid).length}>Add</button>}
                <button onClick={(EO)=>{this.change(0);this.answerChoose(EO,undefined);this.props.cbEdited(false)}}>Cancel</button>
            </div>
        );
        
    } 
}
module.exports= AddEdditItem;