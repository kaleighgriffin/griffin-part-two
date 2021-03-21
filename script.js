let answer = ("Did you feed, pet or walk him/her?");

if (answer) ["feed"];
    (energy) = i * 1.2;

if (answer) ["pet"];
    (happiness) = i * 1.1;

if (answer) ["walk"] ;
    (happiness) = i * 1.1;
    (energy) = i * .8;

if (energy) i < 0; 
    prompt("Not enough energy for a walk");

console.log(name);

console.log((happiness), "happiness");

console.log((energy), "energy");