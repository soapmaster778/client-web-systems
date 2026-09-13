interface Animal {
    name: string;
    age: number;
    color?: string;

    move(): void;
}

class Cat implements Animal {
    public color?: string;

    constructor(
        public name: string,
        public age: number,
        color?: string
    ) {
        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} walks and runs.`);
    }
}

class Bird implements Animal {
    public color?: string;

    constructor(
        public name: string,
        public age: number,
        color?: string
    ) {
        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} flies.`);
    }
}

class Fish implements Animal {
    public color?: string;

    constructor(
        public name: string,
        public age: number,
        color?: string
    ) {
        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} swims.`);
    }
}

const cat: Cat = new Cat("Tom", 3, "Gray");
const bird: Bird = new Bird("Rio", 2);
const fish: Fish = new Fish("Nemo", 1, "Orange");

cat.move();
bird.move();
fish.move();

console.log(cat);
console.log(bird);
console.log(fish);
