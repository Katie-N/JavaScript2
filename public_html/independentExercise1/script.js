// Katie Nordberg 9/17/2021
(function () {
  let friend = {
    firstName: "Samantha",
    lastName: "Smith",
    birthDate: new Date(1992, 4, 5),
    desiredAnnualSalary: 90000,
    educationLevel: 16,
    calculateSalary: function() {
      let likelyAnnualSalary = (this.desiredAnnualSalary / 2) + (this.educationLevel * 100);
      return likelyAnnualSalary;
    }
  };

  let friendLabels = ["First Name", "Last Name", "Birthday", "Desired Annual Salary", "Educational Level", "Likely Annual Salary"];

  function displayObjectStats(obj, labels) {
    let i = 1;
    for(const property in obj) {
      let stat = document.createElement("p");
      let statValue = null;
      let statLabel = labels[i - 1];

      // Test to see if property is a method (or "function")
      if (typeof obj[property] === "function") {
        statValue = obj[property]();
      } else if (obj[property] instanceof Date) {
        statValue = convertToMMDDYYYY(obj[property]);
      } else {
        statValue = obj[property];
      }

      if (statLabel.includes("Salary")) {
        if (statValue == null) {
          statValue = "$" + obj[property].toLocaleString();
        } else {
          statValue = "$" + statValue.toLocaleString();
        }
      }

      stat.innerText = statLabel + ": " + statValue;
      stat.setAttribute("id", "p" + i);
      document.getElementById("objectStats").appendChild(stat);
      i++;
    }
  }

  displayObjectStats(friend, friendLabels);

  console.log(friend.birthDate);

  function convertToMMDDYYYY(date) {
    return date.toLocaleDateString();
  }
})();
