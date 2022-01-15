"use strict";

function maxClientsID(arr){
    return arr.reduce((acc,e)=>{
        if(e.id>acc) {
            return e.id
        }else {
            return acc
        };
    },arr[0].id)+1
}
export {maxClientsID}