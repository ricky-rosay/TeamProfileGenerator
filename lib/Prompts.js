const inquirer = require("inquirer");

const Engineer = require("./Engineers");

const Intern = require("./Intern");

const Manager = require("./Managers");

const renderPage = require("../src/page-template")

class Team {
    constructor() {
        this.member = [];
    }

    async addManagers() {
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Manager's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Manager's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Manager's email? `,
                },
                {

                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the Manager's office number? `,
                }
            ])
            .then((managerObject) => {
                this.member.push(new Manager(managerObject));
            });
    }
}