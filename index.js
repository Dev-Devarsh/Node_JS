const { resolve } = require("path");

let a = 20;
let b = 0;
let writi = new Promise((resolve,reject) => {
    setTimeout(() => {
        b=30;
        resolve(30);
    }, 2000);

});
console.log(a + b);
