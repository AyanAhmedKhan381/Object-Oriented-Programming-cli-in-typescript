#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("=".repeat(70)));
console.log(chalk.yellow("  (っ◔◡◔)っ 💘♟ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞_𝐓𝐨_𝐂𝐨𝐝𝐞_𝐖𝐢𝐭𝐡_𝐀𝐲𝐚𝐧  ♢💙 (っ◔◡◔)っ"));
console.log(chalk.red("=".repeat(70)));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    Students = [];
    addStudent(obj) {
        this.Students.push(obj);
    }
}
const persons = new Person;
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.yellow.bold("Ap kis sa bat karna pasand kara ge....."),
            choices: ["khud se:Self", "Student"]
        });
        if (ans.select == "khud se:Self") {
            console.log(chalk.green("hello me khud sa bat ker raha hu"));
            console.log(chalk.green("Mare Tabiyat Achi hai "));
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: chalk.yellow("Ap ko kis Student sai bat karni hai"),
                name: "student"
            });
            const student = persons.Students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, or me thek hu`);
                console.log(persons.Students);
            }
            if (student) {
                console.log(chalk.green(`Hello i am ${student.name}, or me thek hu......................`));
                console.log(chalk.green(persons.Students));
            }
        }
    } while (true);
};
programStart(persons);
