var MyStore = React.createClass({
    displayName: "MyStore",
    getInitialState: function () {
        return {
            ClickedSelected: false,
            sortSpisok:this.props.products ,
            filter:"",
        };
    },
    choose:function(i){
        this.setState({ClickedSelected:i});
    },
    deleteobj:function(i){
        this.setState({delete:true,
                        sortSpisok:this.state.sortSpisok.filter((e)=>{
                            console.log(e);
                            return !(e.code==i);
                        })});
    },
    render:function(){
        let spisokProducts=[];
        this.state.sortSpisok.forEach((e,i)=>{
            let myElement=React.createElement(MyProduct,{el:e,isClicked:this.state.ClickedSelected,index:i,key:e.code,cbChoose:this.choose,cbDelete:this.deleteobj});
            spisokProducts.push(myElement);
        });
        return React.DOM.div({
            className: "MyStore"
        },
        React.DOM.h1(null, this.props.name),
        spisokProducts)
    } 
});