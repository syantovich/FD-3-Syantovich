
var React=require("react");


class AddEdditItem extends React.Component{

    displayName =  "AddEdditItem";
    state={
        code:this.props.code,
        el:false
    }
    render(){
        let el=false;
        this.props.spisok.forEach(e=>{
            if(e.code===this.state.code){
                el=e;
                
            }
        });
        if (el==false)return false;
        let nameBlock=<p>{(this.props.workmode==2)?"Eddit existing Product":"Add new product"}</p>;
        let code=(this.props.workmode==2)?<label>Code: <input type="number" defaultValue={el.code}/></label>:<p>Code:{el.code}</p>
        let name=<label>Name: <input type="text" defaultValue={(this.props.workmode==2)?el.name:""}/></label>
        let price=<label>Price: <input type="number" defaultValue={(this.props.workmode==2)?el.price:""}/></label>
        let url1=<label>URL Photo1: <input type="text" defaultValue={(this.props.workmode==2)?el.photos[0]:""}/></label>
        let count=<label>Quantity: <input type="number" defaultValue={(this.props.workmode==2)?el.count:""}/></label>

        return (
            <div className={el.code}>
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