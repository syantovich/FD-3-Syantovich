"use strict";

var React =require("react");

var ReactDOM=require("react-dom");


var MyStore=require('./components/Store');

var nameStore=require("./nameStore.json");
var products=require("./products.json");


ReactDOM.render(
    React.createElement(MyStore,{name:nameStore,products:products}), 
    document.getElementById('container') 
  );