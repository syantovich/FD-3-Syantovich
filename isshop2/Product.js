var MyProduct = React.createClass({
    displayName: "MyProduct",
    getInitialState: function () {
        return {
            isClicked: false,
            sortSpisok:this.props.spisok ,
            filter:"",
        };
    },
    choose:function(EO,i){
        this.setState({isClicked:i});
    },
    deleteobj:function(EO,i){
        EO.stopPropagation();
        this.props.products.splice(i,1);
        this.setState({isClicked:false});
    },
    render:function(){
        var infoCodes=[];
        this.props.products.forEach((e,i) => {
             var imgCodes=[];
            e.photos.forEach(el=>{
                let one=React.DOM.img({key:`${el}`,src:el},);
                imgCodes.push(one);
            });
            let x=e.code;
            let info=React.DOM.div({key:x,className:`info ${(this.state.isClicked===i)?"chosen":""}`,onClick:(EO)=>{this.choose(EO,i);}},
                        React.DOM.div({className:"divImg"},imgCodes),
                        React.DOM.span({className:"nameProd"},e.name),
                        React.DOM.span({className:"price"},`Цена ${e.price}`),
                        React.DOM.span({className:"howmuch"},`На скалде осталось ${e.count}`),
                        React.DOM.input({type:"submit",value:"Delete",onClick:(EO)=>{this.deleteobj(EO,i);}},null)
                        );
            infoCodes.push(info);
            
        });


        return React.DOM.div({className:"MyProduct"},infoCodes)
        
    } 
});