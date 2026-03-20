# RandomMessages

## Description
RandomMessages is a Node.js script that displays random facts about planets in our solar system. Each time you run the script, it randomly selects a planet and presents three random facts about it.

## Features
- Randomly selects one of the eight planets in our solar system
- Displays three random facts about the selected planet
- Includes comprehensive facts about:
  - Mercury
  - Venus
  - Earth
  - Mars
  - Jupiter
  - Saturn
  - Uranus
  - Neptune

## Usage
To run the script:

```bash
node script.js
```

## Output
The script will print a message to the console in the following format:

```
Did you know that [Planet Name] is a planet in our solar system? Here are some facts about [Planet Name]:
- [Random Fact 1]
- [Random Fact 2]
- [Random Fact 3]
```

## Requirements
- Node.js installed on your system

## How It Works
1. The script defines an array of eight planets, each with five associated facts
2. It randomly selects a planet from the array
3. It randomly picks three facts from the selected planet's facts array
4. It constructs a message with the planet name and the three facts
5. The message is logged to the console