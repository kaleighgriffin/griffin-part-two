let petName = prompt("What is your pet's name?");

let petHappiness = 0;

let petEnergy = 0;

function deliverable2() {

    for (let i = 0; i <=5; i++) {

        let petAnswer = prompt("Did you feed, pet or walk him/her?");

        if (petEnergy > 0, petAnswer === "feed") {
            petEnergy += 2;

        } else if (petEnergy > 0, petAnswer === "pet") {
            petHappiness += 1;

        } else if (petEnergy > 0, petAnswer === "walk") {
            petHappiness += 2;
            petEnergy -= 1;

        } else ("input invalid")

        if (petEnergy < 0) {
            alert("Not enough energy to enjoy a walk");

        }

    }

}

deliverable2();

console.log(petName, " has", petHappiness, " happiness and", petEnergy, " energy.");