



function abs(x){
    if(x>0){
        return x;
    }
    else{
        return -x;
    }
}

abs(10)===abs(-10);

function sum(array){
    let sum=0;
    for(let x of array){
        sum+=x;
    }
    return sum;
}

let co = sum([10,20,30,40,50]);

console.log("sum is ",co);


function factorial(n){
    let product=1;
    while(n>1){
        product*=n;
        n--;
    }
    return product;
}


function fact2(n){
    let i,product=1;
    for(i=2;i<=n;i++){
        product*=i;
    }return product;
}
fact2(5);