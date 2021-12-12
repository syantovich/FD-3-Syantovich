var MyProduct=React.createClass({
    displayName:"MyProduct",

    render: function(){

        
       var infoCodes=[];
        this.props.products.forEach((e,i) => {
             var imgCodes=[];
            e.photos.forEach(el=>{
                let one=React.DOM.img({src:el},);
                imgCodes.push(one);
            });
            let info=React.DOM.div({key:e.code,className:"info"},
                        React.DOM.div({className:"divImg"},imgCodes),
                        React.DOM.span({className:"nameProd"},e.name),
                        React.DOM.span({className:"price"},`Цена ${e.price}`),
                        React.DOM.span({className:"howmuch"},`На скалде осталось ${e.count}`),
                        );
            infoCodes.push(info);
            
        });


        return React.DOM.div({className:"MyProduct"}, 
                React.DOM.h1(null,this.props.name),
                React.DOM.div({className:"allProducts"},infoCodes),
        );
    }
});