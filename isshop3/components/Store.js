var React=require("react");

require("./Store.css");

var MyProduct=require("./Product");
var MyItem=require("./Item");
var AddEdditItem=require("./AddEdditItem");
class MyStore extends React.Component{
    state ={
        ClickedSelected: false,
        sortSpisok:this.props.products ,
        filter:"",
        workmode:0,
    };
    displayName = "MyStore";
    choose=(i)=>{
        this.setState({ClickedSelected:i});
    };
    deleteobj=(i)=>{
        this.setState({ delete:true,
                        ClickedSelected:(i==this.state.ClickedSelected)?false:this.state.ClickedSelected,
                        sortSpisok:this.state.sortSpisok.filter((e)=>{
                            return !(e.code==i);}),
                        });
    };
    changeMode=(num)=>{
        this.setState({workmode:num});
    };
    render(){
        let spisokProducts=[];
        this.state.sortSpisok.forEach((e,i)=>{
            let myElement=<MyProduct el={e} isClicked={this.state.ClickedSelected} key={e.code} cbChoose={this.choose} cbDelete= {this.deleteobj} cbChangeMode={this.changeMode} wm={this.state.workmode}/>
            spisokProducts.push(myElement);
        });
        let infoBlock=false;
            
        if(this.state.workmode==1){
            infoBlock=<MyItem spisok={this.state.sortSpisok} code={this.state.ClickedSelected}/>;
        }
        if(this.state.workmode>1){
            infoBlock=<AddEdditItem workmode={this.state.workmode} spisok={this.state.sortSpisok} code={this.state.ClickedSelected}/>
        }
        return <div className="MyStore"><h1>{this.props.name}</h1><table><tbody><tr><th>Имя</th><th>Price</th><th>URL</th><th>Quantity</th><th>Control</th></tr>{spisokProducts}</tbody></table>{infoBlock}</div>;
}}



module.exports=MyStore;