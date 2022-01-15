"use strict";

function maxClientsID(arr){
    if(arr.length==0) return 1;
    return arr.reduce((acc,e)=>{
        e.id
        if(e.id>acc) {
            return e.id
        }else {
            return acc
        };
    },arr[0].id)+1
}
export {maxClientsID}