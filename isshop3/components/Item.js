var React=require("react");
require("./Item.css");


class MyItem extends React.Component{

    displayName =  "MyItem";

    render(){
        let imgCodes=[];
            let el;
            this.props.spisok.forEach(e=>{
                if(e.code===this.props.code){
                    el=e;
                }
            });
            if(el==undefined){return false;}
            el.photos.forEach(e=>{
                let one=<img key={e} src={e}></img>;
                imgCodes.push(one);
            });
            let x=el.code;
            let info=<div key={x} className={`info`}>
                <div className="divImg">{imgCodes}</div>
                <span className="nameProd">{el.name}</span>
                <span className="price">Цена {el.price}</span>
                <span className="howmuch">На скалде осталось {el.count}</span>
            </div>
            
        


        return info;
        
    } 
}
module.exports= MyItem;