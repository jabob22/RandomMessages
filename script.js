let message = "";
let planets = [
{ name: "Earth", facts: ["Our home planet", "1KG on Earth is 1KG on Earth.", "Earth is the only planet known to support life."] },
{ name: "Mercury", facts: ["Mercury is the closest planet to the Sun.", "A year on Mercury lasts only 88 Earth days.", "Mercury has no atmosphere to trap heat."] },
{ name: "Venus", facts: ["Venus is the hottest planet in our solar system.", "A day on Venus is longer than a year on Venus.", "Venus has a thick atmosphere that traps heat."] },
{ name: "Mars", facts: ["Mars is known as the Red Planet.", "Mars has the largest volcano in the solar system, Olympus Mons.", "Mars has two moons, Phobos and Deimos."] },
{ name: "Jupiter", facts: ["Jupiter is the largest planet in our solar system.", "Jupiter has a Great Red Spot, which is a giant storm.", "Jupiter has at least 79 moons."] },
{ name: "Saturn", facts: ["Saturn is famous for its rings.", "Saturn is the second largest planet in our solar system.", "Saturn has at least 82 moons."] },
{ name: "Uranus", facts: ["Uranus rotates on its side.", "Uranus has a faint ring system.", "Uranus is the coldest planet in our solar system."] },
{ name: "Neptune", facts: ["Neptune is the farthest planet from the Sun.", "Neptune has strong winds that can reach up to 1,200 miles per hour.", "Neptune has 14 known moons."] }];

    
let pick = Math.floor(Math.random() * planets.length);
let planet = planets[pick];
message += `Did you know that ${planet.name} is a planet in our solar system? Here are some facts about ${planet.name}:\n`;
planet.facts.forEach((fact, index) => {
    message += `${index + 1}. ${fact}\n`;
});



console.log(message);