function iterateOverHouses(houses) {
    let houses_index = 0;

    return {
        next: function () {
            return houses_index < houses.length ? {
                value: houses[houses_index++],
                done: false
            } :
                {
                    done: true
                }
        }
    }
}

const hogwarts_houses = iterateOverHouses(["Slyherin", "Griffindor", "Hufflepuf", "Ravenclaw"])

console.log(hogwarts_houses.next())
console.log(hogwarts_houses.next())
console.log(hogwarts_houses.next())
console.log(hogwarts_houses.next())
console.log(hogwarts_houses.next())