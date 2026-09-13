abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        protected salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Developer extends Employee implements Payable {
    constructor(
        name: string,
        age: number,
        salary: number,
        public programmingLanguage: string
    ) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(`${this.name} received salary: ${this.salary} UAH`);
    }
}

class Manager extends Employee implements Payable {
    constructor(
        name: string,
        age: number,
        salary: number,
        public department: string
    ) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`${this.name} received salary: ${this.salary} UAH`);
    }
}

const developer1: Developer = new Developer(
    "John",
    25,
    50000,
    "TypeScript"
);

const developer2: Developer = new Developer(
    "Anna",
    28,
    60000,
    "Java"
);

const manager1: Manager = new Manager(
    "Michael",
    35,
    80000,
    "Development"
);

const manager2: Manager = new Manager(
    "Kate",
    40,
    90000,
    "Sales"
);

developer1.pay();
developer2.pay();
manager1.pay();
manager2.pay();

const employees: Employee[] = [
    developer1,
    developer2,
    manager1,
    manager2
];

let totalAnnualBonus: number = 0;

for (const employee of employees) {
    const bonus: number = employee.getAnnualBonus();

    console.log(
        `${employee.name} annual bonus: ${bonus} UAH`
    );

    totalAnnualBonus += bonus;
}

console.log(`Total annual bonuses: ${totalAnnualBonus} UAH`);
