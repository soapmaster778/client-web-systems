import promptSync = require("prompt-sync");

const prompt = promptSync();

function calculateIceCreamPrice(): void {
    let totalPrice: number = 0;

    const size: string = prompt("Choose ice cream size (small/large): ").toLowerCase();

    if (size === "small") {
        totalPrice += 10;
    } else if (size === "large") {
        totalPrice += 25;
    } else {
        console.log("Incorrect ice cream size");
        return;
    }

    const toppingsInput: string = prompt(
        "Choose toppings separated by comma (chocolate, caramel, berries): "
    );

    const toppings: string[] = toppingsInput
        .toLowerCase()
        .split(",")
        .map((topping: string) => topping.trim());

    let hasTopping: boolean = false;

    if (toppings.includes("chocolate")) {
        totalPrice += 5;
        hasTopping = true;
    }

    if (toppings.includes("caramel")) {
        totalPrice += 6;
        hasTopping = true;
    }

    if (toppings.includes("berries")) {
        totalPrice += 10;
        hasTopping = true;
    }

    if (!hasTopping) {
        console.log("You must choose at least one topping");
        return;
    }

    const marshmallow: string = prompt(
        "Add marshmallow for 5 UAH? (yes/no): "
    ).toLowerCase();

    if (marshmallow === "yes") {
        totalPrice += 5;
    }

    console.log(`Total price: ${totalPrice} UAH`);
}

calculateIceCreamPrice();
