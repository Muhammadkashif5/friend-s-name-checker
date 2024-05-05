#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log('█'.repeat(80));
console.log(chalk.blue.bold("\n                              FRIEND's NAME CHECKER\n"));
console.log('█'.repeat(80));

const friendsList: string[] = ['Areeb', 'Basit', 'Hammad', 'Kashif', 'Wajid'];
console.log(chalk.yellow("\nThe purpose of the list that's given is only to play friend's name checker game: "));
console.log(friendsList);

const answers = await inquirer.prompt([
{
    name: "name",
    type: "string",
    message: "Enter your friend's name: ",
},
])

const enteredName: string = answers.name.trim();

if (friendsList.includes(enteredName)) {
    console.log(chalk.green(`${enteredName} is your friend.`));
} else {
    console.log(chalk.red(`${enteredName} is not your friend.`));
};