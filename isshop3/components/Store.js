var React=require("react");

require("./Store.css");

var MyProduct=require("./Product");

class MyStore extends React.Component{
    state ={
        ClickedSelected: false,
        sortSpisok:this.props.products ,
        filter:"",
    };
    displayName = "MyStore";
    choose=(i)=>{
        this.setState({ClickedSelected:i});
    };
    deleteobj=(i)=>{
        this.setState({delete:true,
                        sortSpisok:this.state.sortSpisok.filter((e)=>{
                            return !(e.code==i);
                        })});
    };
    render(){
        let spisokProducts=[];
        this.state.sortSpisok.forEach((e,i)=>{
            let myElement=<MyProduct el={e} isClicked={this.state.ClickedSelected} key={e.code} cbChoose={this.choose} cbDelete= {this.deleteobj}/>
            spisokProducts.push(myElement);
        });
        return <div className="MyStore"><h1>{this.props.name}</h1>{spisokProducts}</div>;
}}



module.exports=MyStore;