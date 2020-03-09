prompt("Enter Your Name")

prompt("Enter product one")
let p1 = prompt("Enter product one price")

if(p1 === 0)
{
    prompt("price cannot be zero. Enter a valid price");
}

prompt("Enter product two")
let p2 = prompt("Enter product two price")

prompt("Enter product three")
let p3 = prompt("Enter product three price")

let price;

const total = p1 + p2 +p3;

console.log(total);

const $grand_Total = total * 6.25;