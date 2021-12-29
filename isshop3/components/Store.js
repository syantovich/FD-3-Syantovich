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
    cbSave=(arr)=>{
        this.state.sortSpisok.map((e,i,arr1)=>{
            let k=0;
            if(e.code==arr.code){
                e.name=arr.name;
                e.price=arr.price;
                e.photos[0]=arr.photos[0];
                e.count=arr.count;
                k=1;
            }
            if(arr1.length-1==i&&k==0){
                arr1.push(arr);
            }
        });
        this.setState({sortSpisok:this.state.sortSpisok});
    }
    elemFind=(e)=>{
        if(e.code==this.state.ClickedSelected){return true}else{return false}
    }
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

            let myElement=<MyProduct spisok={this.state.sortSpisok} code={this.state.ClickedSelected} cbChoose={this.choose} cbDelete= {this.deleteobj} cbChangeMode={this.changeMode} wm={this.state.workmode} elemFind={this.elemFind}/>

        let infoBlock=false;
            
        if(this.state.workmode==1){
            infoBlock=<MyItem spisok={this.state.sortSpisok} code={this.state.ClickedSelected} elemFind={this.elemFind}/>;
        }
        if(this.state.workmode>1){
            infoBlock=<AddEdditItem workmode={this.state.workmode} spisok={this.state.sortSpisok} code={this.state.ClickedSelected} elemFind={this.elemFind} cbSave={this.cbSave}/>
        }
        return <div className="MyStore"><h1>{this.props.name}</h1>{myElement}{infoBlock}</div>;
}}



module.exports=MyStore;