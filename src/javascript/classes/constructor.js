
// Derived class constructor 
class Bird {
    constructor(name, color, flies) {
        this.name = name;
        this.color = color;
        this.flies = flies
    }
}

const bird = new Bird("Pengui", "White-gray", false)

class Woodpecker extends Bird {
    constructor(name, color, flies, peaks) {
        super(name, color, flies)
        this.peaks = peaks
    }
}

const woody = new Woodpecker("Woody", "Blue-red", true, true)
