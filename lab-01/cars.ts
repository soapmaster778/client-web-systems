abstract class Car {
    constructor(
        public model: string,
        protected year: number,
        private price: number
    ) {}

    protected getPrice(): number {
        return this.price;
    }

    abstract showInfo(): void;
}

class BMW extends Car {
    constructor(
        model: string,
        year: number,
        price: number,
        public engine: string
    ) {
        super(model, year, price);
    }

    showInfo(): void {
        console.log("BMW");
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Price: ${this.getPrice()} UAH`);
        console.log(`Engine: ${this.engine}`);
        console.log("--------------------");
    }
}

class Audi extends Car {
    constructor(
        model: string,
        year: number,
        price: number,
        public driveType: string
    ) {
        super(model, year, price);
    }

    showInfo(): void {
        console.log("Audi");
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Price: ${this.getPrice()} UAH`);
        console.log(`Drive type: ${this.driveType}`);
        console.log("--------------------");
    }
}

class Toyota extends Car {
    constructor(
        model: string,
        year: number,
        price: number,
        public fuelType: string
    ) {
        super(model, year, price);
    }

    showInfo(): void {
        console.log("Toyota");
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Price: ${this.getPrice()} UAH`);
        console.log(`Fuel type: ${this.fuelType}`);
        console.log("--------------------");
    }
}

const bmw1: BMW = new BMW("X5", 2022, 2500000, "3.0 Diesel");
const bmw2: BMW = new BMW("M3", 2023, 3200000, "3.0 Petrol");

const audi1: Audi = new Audi("A6", 2021, 2100000, "Quattro");
const audi2: Audi = new Audi("Q7", 2023, 3500000, "Quattro");

const toyota1: Toyota = new Toyota("Camry", 2022, 1500000, "Petrol");
const toyota2: Toyota = new Toyota("RAV4", 2023, 1800000, "Hybrid");

bmw1.showInfo();
bmw2.showInfo();

audi1.showInfo();
audi2.showInfo();

toyota1.showInfo();
toyota2.showInfo();
