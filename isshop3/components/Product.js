require("./Product.css");
var React=require("react");

class MyProduct extends React.Component{
    state = {
        filter:"",
    };
    displayName =  "MyProduct";
    answerChoose=(EO)=>{
        this.props.cbChoose(this.props.el.code);
    };
    delobj=(EO)=>{
        EO.stopPropagation();
        this.props.cbDelete(this.props.el.code);
    };
    render(){
        let imgCodes=[];
            this.props.el.photos.forEach(e=>{
                let one=<img key={e} src={e}></img>;
                imgCodes.push(one);
            });
            let x=this.props.el.code;
            let info=<div key={x} className={`info ${(this.props.isClicked===this.props.el.code)?"chosen":""}`} onClick={this.answerChoose}>
                <div className="divImg">{imgCodes}</div>
                <span className="nameProd">{this.props.el.name}</span>
                <span className="price">Цена {this.props.el.price}</span>
                <span className="howmuch">На скалде осталось {this.props.el.count}</span>
                <input type="submit" value="Delete" onClick={this.delobj} />
            </div>
            
        


        return info;
        
    } 
}


module.exports= MyProduct;