var MyProduct = React.createClass({
    displayName: "MyProduct",
    getInitialState: function () {
        return {
            filter:"",
        };
    },
    answerChoose:function(EO){
        this.props.cbChoose(this.props.el.code);
    },
    delobj:function(EO){
        EO.stopPropagation();
        this.props.cbDelete(this.props.el.code);
    },
    render:function(){
        let imgCodes=[];
            this.props.el.photos.forEach(e=>{
                let one=React.DOM.img({key:`${e}`,src:e},);
                imgCodes.push(one);
            });
            let x=this.props.el.code;
            let info=React.DOM.div({key:x,className:`info ${(this.props.isClicked===this.props.el.code)?"chosen":""}`,onClick:this.answerChoose},
                        React.DOM.div({className:"divImg"},imgCodes),
                        React.DOM.span({className:"nameProd"},this.props.el.name),
                        React.DOM.span({className:"price"},`Цена ${this.props.el.price}`),
                        React.DOM.span({className:"howmuch"},`На скалде осталось ${this.props.el.count}`),
                        React.DOM.input({type:"submit",value:"Delete",onClick:this.delobj},null)
                        );
            
        


        return info;
        
    } 
});