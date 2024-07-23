let N1 = Math.floor(Math.random()*3); 
let N2 = Math.floor(Math.random()*3);
let N3 = Math.floor(Math.random()*3);
// console.log(N2)

let Adjective = {
    0 : "Quick",
    1 : "Amazing",
    2 : "Fire",
} 

let ShopName = {
    0 : "Engine",
    1 : "Garments",
    2 : "Foods",
}

let AnotherName = {
    0 : "Hub",
    1 : "Bros",
    2 : "Limited",
}

document.write(`${Adjective[N1]} ${ShopName[N2]} ${AnotherName[N3]}`)