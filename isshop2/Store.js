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
        let newArr=this.state.sortSpisok;
        newArr.splice(i,1);
        this.setState({delete:true,
                        sortSpisok:newArr});
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