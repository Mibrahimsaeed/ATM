#! /usr/bin/env node
import inquirer from "inquirer";
const atm = await inquirer.prompt([{
        type: "input",
        name: "pin",
        message: "Enter your pin "
    },
    {
        type: "list",
        name: "usrinput",
        choices: ["cash withdraw", "balance inquiery", "change pin"],
        message: "select"
    },
]);
function generate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let random = generate(1, 100000);
if (atm.usrinput == "cash withdraw") {
    const amount = await inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter the amount"
        }
    ]);
    console.log("Your remaining balance is", +random);
}
else if (atm.usrinput == "balance inquiery") {
    console.log("Your current balance is", +random);
}
else if (atm.usrinput == "change pin") {
    const input = await inquirer.prompt([
        {
            type: "input",
            name: "oldpin",
            message: "Enter existing pin"
        }
    ]);
    if (input.oldpin == atm.pin) {
        const input2 = await inquirer.prompt([{
                type: "input",
                name: "newpin",
                message: "Enter your new pin",
            },
        ]);
        console.log("updated successfully");
    }
}
