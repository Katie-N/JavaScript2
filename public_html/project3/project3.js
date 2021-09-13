/* Katie Nordberg - 9/11/2021 */

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"];
let myBirthdayMonth = "July";

let fullName = "Katie Nordberg";
let desiredSalary = 1000000;
let veteranStatus = false;
let friends = ["Luke", "Gennee", "Bethany"];
let friendsDesiredSalaries = [1000000000, 100000 67000]
let friendObject = {
  firstName: "Katrina",
  lastName: "Grasinger",
  desiredSalary: 150000
}

months[0] = "January";
console.log(months);

months[1] = "February";
document.getElementById("p1").textContent = months[0];
document.getElementById("p2").textContent = months[1];
document.getElementById("p3").textContent = months[2];

document.getElementById("p4").textContent = "My birthday is in the month of " + myBirthdayMonth;
document.getElementById("p5").textContent = "My birthday is in the month of " + months[6];

document.getElementById('p6').textContent = 'My birthday is in the month of ' + myBirthdayMonth;
document.getElementById('p7').textContent = 'My birthday is in the month of ' + months[6];

document.getElementById("p8").innerHTML = "My <em>birthday</em> is in the month of " + myBirthdayMonth + " using the innerHTML property";
document.getElementById("p9").innerHTML = "My <em>birthday</em> is in the month of " + months[6] + " using the innerHTML property";
