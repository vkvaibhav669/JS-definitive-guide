let book = {
    topic : "Javascript",
    edition : 7
};
console.log(book);

console.log(book.topic);

console.log(book.edition);
book.author="Flamming";
console.log(book);


let primes = [2,3,5,7,11];

console.log(primes.length);
console.log(primes[0]);
console.log(primes[primes.length-1]);

let points = [ 
    {x:0,y:0},
    {x:1,y:1}

]

console.log(points);
let ans = points[1].x - points[0].x;
console.log(ans);

let count = 0;

count++;
count+=2;
count+=5;
console.log(count);


let data = {
    trial1 : [[1,2],[3,4]],
    trial2 : [[2,3],[4,5]]
};


console.log(data);

let x =2,y=3;

console.log(x===y);
console.log(x!==y);

console.log(x<y);
console.log(x<=y);

console.log("two"==="three");
console.log(false ===(x>y));

console.log((x===2) && (y===3));

console.log((x>3) || (y<3));

console.log(false === (x>y));


let a = [];

a.push(23,24,25,26);
console.log(a)
console.log(a.reverse());
console.log(a)


function plus1(x){
    return x+1;
}

let ret = plus1(24);

console.log(ret);


let square = function(x){
    return x*x;
}

square(plus1(3));

let plus2 = x => x+2;
let sqare2 = x => x*x;
let rutine = plus2(23);
let args = sqare2(4);
console.log(rutine);
console.log(args);



