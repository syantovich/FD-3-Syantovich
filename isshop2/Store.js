var MyStore = React.createClass({
    displayName: "MyStore",
    render:function(){
        return React.DOM.div({
            className: "MyStore"
        },
        React.DOM.h1(null, this.props.name),
        React.createElement(MyProduct,{products:this.props.products}))
    } 
});