//faulty calculator:
console.log("This is the code for faulty calculator");
//for getting numbers from user:
let randomNumber = Math.random();
console.log(randomNumber);
let x = Number(prompt("Provide first number"));
let z = prompt("Provide operation");
let y = Number(prompt("Provide second number"));

let obj =
{
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (randomNumber > 0.1) 
{
    //correct calculation
    console.log(`The correct result is ${x} ${z} ${y}`);
    alert(`The correct result is ${eval(`${x} ${z} ${y}`)}`);
} 
else 
{
    //incorrect calculation
    z= obj[z];
    alert(`The incorrect result is ${eval(`${x} ${z} ${y}`)}`);
}