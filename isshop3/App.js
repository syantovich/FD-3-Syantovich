"use strict";

var React =require("react");

var ReactDOM=require("react-dom");

var MyStore=require('./components/Store');

var nameStore='21VEK';
var products=[ 
  {name:'Realme 8 6GB/128GB',price:699,photos:["https://cdn21vek.by/img/galleries/6545/81/preview_b/86gb128gbrmx3085_realme_01_60c11558b8a06.jpeg","https://cdn21vek.by/img/galleries/6545/81/preview_b/86gb128gbrmx3085_realme_01_60c1155991fc4.jpeg"],code:145,count:23}, 
  {name:'Xiaomi Redmi 9A 2GB/32GB (серый)',price:279,photos:["https://cdn21vek.by/img/galleries/6088/597/preview_b/redmi9a2gb32gbm2006c3lg_xiaomi_01_5f16ddbfba68a.jpeg","https://cdn21vek.by/img/galleries/6088/597/preview_b/redmi9a2gb32gbm2006c3lg_xiaomi_01_5f16ddc34b02b.jpeg","https://cdn21vek.by/img/galleries/6088/597/preview_b/redmi9a2gb32gbm2006c3lg_xiaomi_01_5f16ddc3e9a66.jpeg"],code:2546,count:11}, 
  {name:'Samsung Galaxy A02 ',price:148,photos:["https://cdn21vek.by/img/galleries/6368/637/preview_b/galaxya02sma022gzbbser_samsung_6020da95a4345.jpeg","https://cdn21vek.by/img/galleries/6368/637/preview_b/galaxya02sma022gzbbser_samsung_6020da9a9a23a.jpeg","https://cdn21vek.by/img/galleries/6368/637/preview_b/galaxya02sma022gzbbser_samsung_6020da99de118.jpeg"],code:3456,count:45}, 
  {name:'Xiaomi Redmi Note 10S 6GB/128GB',price:666,photos:["https://cdn21vek.by/img/galleries/6538/254/preview_b/redminote10s6gb128gb_xiaomi_01_609e36e931ae5.jpeg","https://cdn21vek.by/img/galleries/6538/254/preview_b/redminote10s6gb128gb_xiaomi_01_609e38f7b3595.jpeg","https://cdn21vek.by/img/galleries/6538/254/preview_b/redminote10s6gb128gb_xiaomi_01_609e38f8661b9.jpeg"],code:4564,count:1}, 
  {name:'Samsung Galaxy A12 32GB',price:777,photos:["https://cdn21vek.by/img/galleries/6737/22/preview_b/galaxya1232gbsma127fzkuser_samsung_610268f887eba.jpeg","https://cdn21vek.by/img/galleries/6737/22/preview_b/galaxya1232gbsma127fzkuser_samsung_610268f8d4430.jpeg","https://cdn21vek.by/img/galleries/6737/22/preview_b/galaxya1232gbsma127fzkuser_samsung_610268f91eb56.jpeg"],code:524,count:0}, 
  {name:'Apple iPhone 11 128GB',price:2000,photos:["https://cdn21vek.by/img/galleries/6270/100/preview_b/iphone11128gbmhdj3_apple_5fec1ba792d5d.jpeg","https://cdn21vek.by/img/galleries/6270/100/preview_b/iphone11128gbmhdj3_apple_5fec1bb00190b.jpeg","https://cdn21vek.by/img/galleries/6270/100/preview_b/iphone11128gbmhdj3_apple_5fec1bb122283.jpeg"],code:6645,count:89}, 
  {name:'Apple iPhone XR 64GB',price:1800,photos:["https://cdn21vek.by/img/galleries/6337/124/preview_b/iphonexr64gbmh6m3_apple_602b612dcc1e4.jpeg","https://cdn21vek.by/img/galleries/6337/124/preview_b/iphonexr64gbmh6m3_apple_602b6135689dc.jpeg","https://cdn21vek.by/img/galleries/6337/124/preview_b/iphonexr64gbmh6m3_apple_602b6135a3687.jpeg"],code:7789,count:61}, 
  {name:'Huawei Y8p',price:479,photos:["https://cdn21vek.by/img/galleries/5997/782/preview_b/y8paqmlx1_huawei_5ec3a0653b253.png","https://cdn21vek.by/img/galleries/5997/782/preview_b/y8paqmlx1_huawei_5ec3a01055e13.png","https://cdn21vek.by/img/galleries/5997/782/preview_b/y8paqmlx1_huawei_5ec3a01082001.png"],code:8879,count:3}, 
  
];

ReactDOM.render(
    React.createElement(MyStore,{name:nameStore,products:products}), 
    document.getElementById('container') 
  );