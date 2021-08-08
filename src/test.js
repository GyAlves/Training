const tasks = [
    {
        id: 1,
        desc: "Buy new notepad - Younote",
        day: "03/07/2021 - 14pm",
        done: false,
    },

];

let index = tasks.map(task => task.id).indexOf(1)
if (index < 0) {
    index = 0
}

console.log(index)
console.log(tasks)
tasks.splice(index, 1)
console.log(tasks)