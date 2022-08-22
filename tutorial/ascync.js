let a = 10;
let b = 20;

let waitdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30) // updated data of b (b=30) 
    }, 2000);
})
waitdata.then((data) => {
    b = data;
    console.log(a + b);
})
