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
        edited:false,
    };
    displayName = "MyStore";
    cbEdited=(boolean)=>{
        this.setState({edited:boolean});
    }
    cbSave=(arr,but)=>{
        if(but=="s"){
            this.state.sortSpisok.map((e)=>{
            
            if(e.code==arr.code){
                e.name=arr.name;
                e.price=arr.price;
                e.photos[0]=arr.photos[0];
                e.count=arr.count;
                
            }
            
            
        });
        }else{
            this.state.sortSpisok.push(arr);
            }
        
        this.setState({sortSpisok:this.state.sortSpisok,
                        edited:false});
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
        let valid={}
        if(num==3){valid={
            name:true,
            code:true,
            price:true,
            url:true,
            quantity:true,
        }}
        this.setState({workmode:num,
                        valid:valid});
    };
    render(){

            let myElement=<MyProduct spisok={this.state.sortSpisok} code={this.state.ClickedSelected} cbChoose={this.choose} cbDelete= {this.deleteobj} cbChangeMode={this.changeMode} wm={this.state.workmode} elemFind={this.elemFind} edited={this.state.edited}/>

        let infoBlock=false;
            
        if(this.state.workmode==1){
            infoBlock=<MyItem spisok={this.state.sortSpisok} code={this.state.ClickedSelected} elemFind={this.elemFind}/>;
        }
        if(this.state.workmode>1){
            infoBlock=<AddEdditItem workmode={this.state.workmode} spisok={this.state.sortSpisok} code={this.state.ClickedSelected} elemFind={this.elemFind} cbSave={this.cbSave} cbChangeMode={this.changeMode} cbChoose={this.choose} valid={this.state.valid||{}} cbEdited={this.cbEdited}/>
        }
        return <div className="MyStore"><h1>{this.props.name}</h1>{myElement}{infoBlock}</div>;
}}



module.exports=MyStore;