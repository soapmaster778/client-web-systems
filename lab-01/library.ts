interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;

    borrow(): void;
}

class Book implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public pages: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Book "${this.name}" borrowed`);
        } else {
            console.log(`Book "${this.name}" is already borrowed`);
        }
    }
}

class Magazine implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Magazine "${this.name}" borrowed`);
        } else {
            console.log(`Magazine "${this.name}" is already borrowed`);
        }
    }
}

class DVD implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public duration: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.name}" borrowed`);
        } else {
            console.log(`DVD "${this.name}" is already borrowed`);
        }
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`"${item.name}" added to library`);
    }

    findItem(itemName: string): LibraryItem | undefined {
        return this.items.find(
            (item: LibraryItem) => item.name === itemName
        );
    }

    showAvailableItems(): void {
        console.log("Available library items:");

        const availableItems: LibraryItem[] = this.items.filter(
            (item: LibraryItem) => !item.isBorrowed
        );

        for (const item of availableItems) {
            console.log(`${item.name} - ${item.author}`);
        }
    }
}

const book: Book = new Book("The Witcher", "Andrzej Sapkowski", 333);

const magazine: Magazine = new Magazine("Teenage Mutant Ninja Turtles", "Mirage Studios", 121);

const dvd: DVD = new DVD("The Odyssey", "Christopher Nolan", 180);

const library: Library = new Library();

library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

library.showAvailableItems();

const foundItem: LibraryItem | undefined =
    library.findItem("The Witcher");

if (foundItem !== undefined) {
    console.log(`Found: ${foundItem.name}`);
    foundItem.borrow();
}

library.showAvailableItems();
