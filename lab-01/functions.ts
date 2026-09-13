function printMessage(message: string="Vasia", count: number = 1): void {
    for (let i: number = 0; i < count; i++) {
        console.log(message);
    }
}

printMessage();
printMessage("Hello");
printMessage("TypeScript", 3);
