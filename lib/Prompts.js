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
    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `What would you like to do now?`,
            choices: [`Add an Engineer`, `Add an Intern`, `Finish The Building`],
        })
            .then(async ({ choice }) => { 
                console.log(choice)
                if (choice === 'Finish The Building') {
                    console.log('Lets gather things up!')
                    this.buildTeam(this.member)
                    return 
                } else {
                    await this.addEmployee(choice)
                    this.makeChoice()
                }
            })
        }
        async addEmployees(passedChoice) { 
            if (passedChoice === 'Add an Engineer') {
                await this.addEngineers()
            } else {
                await this.addInterns()
            }
            console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - `)
        }

        async addEngineers() {
            console.log('Adding an Engineer!')
            await inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `name`,
                        message: `What is the Engineer's name? `,
                    },
                    {
                        type: `input`,
                        name: `id`,
                        message: `What is the Engineer's ID? `,
                    },
                    {
                        type: `input`,
                        name: `email`,
                        message: `What is the Engineer's email? `,
                    },
                    {
                        type: `input`,
                        name: `github`,
                        message: `What is the Engineer's github? `,
                    },
                ])
                .then((engineerObject) => {
                    // potential change to the name of engineer?
                    this.member.push(new Engineer(engineerObject));
                });
            console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - `)
        }
        async addInterns() {
            console.log('Adding an Intern!')
            await inquirer
                .prompt([
                    {
                        type: `input`,
                        name: `name`,
                        message: `What is the Intern's name? `,
                    },
                    {
                        type: `input`,
                        name: `id`,
                        message: `What is the Intern's ID? `,
                    },
                    {
                        type: `input`,
                        name: `email`,
                        message: `What is the Intern's email? `,
                    },
                    {
                        type: `input`,
                        name: `school`,
                        message: `What is the Intern's school? `,
                    },
                ])
                .then((internObject) => {
                    // potential name change
                    this.member.push(new Intern(internObject));
                });
            console.log(`- - - - - - - - - - - - - - - - - - - - - `)
        }
        async buildTeam(passedArray) {
            console.log(`Building the Team!`)
            console.log(passedArray)
            console.log(`- - - - - - - - - - - - - - - - - - - - - `)
            renderPage(passedArray)
        }
}

module.exports = Team;