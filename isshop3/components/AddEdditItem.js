
var React=require("react");


class AddEdditItem extends React.Component{

    displayName =  "AddEdditItem";
    state={
        code:this.props.code,
        el:false
    }
    render(){
        let el=this.props.spisok.find(this.props.elemFind);
        
        if (this.props.workmode==2&&el==undefined)return false;
        let nameBlock=<p>{(this.props.workmode==2)?"Eddit existing Product":"Add new product"}</p>;
        let code=(this.props.workmode==3)?<label>Code: <input type="number" /></label>:<p>Code:{el.code}</p>
        let name=<label>Name: <input type="text" defaultValue={(this.props.workmode==2)?el.name:""}/></label>
        let price=<label>Price: <input type="number" defaultValue={(this.props.workmode==2)?el.price:""}/></label>
        let url1=<label>URL Photo1: <input type="text" defaultValue={(this.props.workmode==2)?el.photos[0]:""}/></label>
        let count=<label>Quantity: <input type="number" defaultValue={(this.props.workmode==2)?el.count:""}/></label>

        return (
            <div>
                {nameBlock}<br/>
                {code}<br/>
                {name}<br/>
                {price}<br/>
                {url1}<br/>
                {count}<br/>
            </div>
        );
        
    } 
}
module.exports= AddEdditItem;