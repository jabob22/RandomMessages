let message = "";
let planets = [
{ name: "Earth", facts: ["Our home planet", "Earth is the only planet known to support life.", "Earth has one moon, the Moon.", "Earth is the third planet from the Sun.", "Earth has a thick atmosphere."] },
{ name: "Mercury", facts: ["Mercury is the closest planet to the Sun.", "A year on Mercury lasts only 88 Earth days.", "Mercury has no atmosphere to trap heat.", "Mercury is the smallest planet in our solar system.", "Mercury has a very thin atmosphere."] },
{ name: "Venus", facts: ["Venus is the hottest planet in our solar system.", "A day on Venus is longer than a year on Venus.", "Venus has a thick atmosphere that traps heat.", "Venus is the second planet from the Sun.", "Venus has a very thick atmosphere."] },
{ name: "Mars", facts: ["Mars is known as the Red Planet.", "Mars has the largest volcano in the solar system, Olympus Mons.", "Mars has two moons, Phobos and Deimos.", "Mars is the fourth planet from the Sun.", "Mars has a thin atmosphere."] },
{ name: "Jupiter", facts: ["Jupiter is the largest planet in our solar system.", "Jupiter has a Great Red Spot, which is a giant storm.", "Jupiter has at least 79 moons.", "Jupiter is the fifth planet from the Sun.", "Jupiter has a thick atmosphere."] },
{ name: "Saturn", facts: ["Saturn is famous for its rings.", "Saturn is the second largest planet in our solar system.", "Saturn has at least 82 moons.", "Saturn is the sixth planet from the Sun.", "Saturn has a thick atmosphere."] },
{ name: "Uranus", facts: ["Uranus rotates on its side.", "Uranus has a faint ring system.", "Uranus is the coldest planet in our solar system.", "Uranus is the seventh planet from the Sun.", "Uranus has a thick atmosphere."] },
{ name: "Neptune", facts: ["Neptune is the farthest planet from the Sun.", "Neptune has strong winds that can reach up to 1,200 miles per hour.", "Neptune has 14 known moons.", "Neptune is the eighth planet from the Sun.", "Neptune has a thick atmosphere."] }];
    
let pick = Math.floor(Math.random() * planets.length);
let planet = planets[pick];
message += `Did you know that ${planet.name} is a planet in our solar system? Here are some facts about ${planet.name}:\n`;
for (let i = 0; i < 3; i++) {
    let factPick = Math.floor(Math.random() * planet.facts.length);
    message += `- ${planet.facts[factPick]}\n`; 
}



console.log(message);