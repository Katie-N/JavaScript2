// Katie Nordberg 9-3-2021

let myName = "Katie Nordberg";
let para1 = document.getElementById("p1");
let n1 = 37;
let n2 = 4
let numberSum = n1 + n2;
let numberMult = n1 * n2;
let myNameAddNum = myName + n1;
let myNameMultNum = myName * n2;
let ageCompare = 18 <= n1;

para1.textContent = myName;
document.getElementById("p2").textContent = numberSum;
document.getElementById("p3").textContent = numberMult;
document.getElementById("p4").textContent = myNameAddNum;
document.getElementById("p5").textContent = myNameMultNum;
document.getElementById("p6").textContent = ageCompare;
