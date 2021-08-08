// Converting Map to an Object 
const fruits_map = ([["apple", 4], ["Grapes", 3], ["Watermelon", 5]])
const fruits_obj = Object.fromEntries(fruits_map)

console.log("Map - object", fruits_obj)

// Converting an Array to an Object 
const snacks_array = [["Chips", "Salt"], ["Gummy_bears", "Sweet"], ["Soda", "beverage"]]
const snacks_obj = Object.fromEntries(snacks_array)

console.log("Array - object", snacks_obj)

// Object transformations

const teams_scores = { "Saints": 64, "Buccaneers": 56, "Patriots": 30 }

const teams_scores_bonuses = Object.fromEntries(
    Object.entries(teams_scores)
        .map(([team, score]) => [team, score * 2])
);

console.log(teams_scores_bonuses);
