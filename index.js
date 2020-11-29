#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const open = require("open");
const clear = require('console-clear');

const prompt = inquirer.createPromptModule();

const questions_project = [
    {
        type: "list",
        name: "action",
        message: "Which project you are interested in?",
        choices: [
            {
                name: "Web Designing & Development for SAC, IIT Delhi",
                value: () => {
                    console.log("\nOpening...Hope you enjoy the website!\n");
                    open("http://sac.iitd.ac.in");
                    setTimeout(project_prompt, 1500);
                }
            },
            {
                name: "Movie Review Sentiment Classifier using RNN",
                value: () => {
                    console.log("\nOpening...Hope you like this one!\n");
                    open("https://github.com/subhalingamd/rnn-movie-review-sentiment-analysis");
                        
                }
            },
            {
                name: "Jobs Scheduler & Manager",
                value: () => {
                    console.log("\nOpening...Hope you like this one!\n");
                    open("https://github.com/subhalingamd/jobs-scheduler");
                    setTimeout(project_prompt, 1500);  
                }
            },
            {
                name: "Symbolic Differentiation",
                value: () => {
                    console.log("\nOpening...Hope you like this one!\n");
                    open("https://github.com/subhalingamd/py-differentiate");
                    setTimeout(project_prompt, 1500);  
                }
            },
            {
                name: `${chalk.italic("< Go Back")}`,
                value: () => {
                    starter();
                }
            }
        ]
    }
];


const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.red.bold("email")}?`,
                value: () => {
                    console.log("\nSee you soon at inbox!\n");
                    open("mailto:subhalingam.d@gmail.com");
                    setTimeout(starter, 1500);
                }
            },
            {
                name: `Text me on ${chalk.green.bold("WhatsApp")}?`,
                value: () => {
                    console.log("\nLet's get in touch soon!\n");                    
                    open("https://api.whatsapp.com/send?phone=919840105513");
                    setTimeout(starter, 1500);
                }
            },
            {
                name: "Explore my projects",
                value: () => {
                    project_prompt();
                }
            },
            {
                name: `${chalk.italic("I'm done. Get me out of here.")}`,
                value: () => {
                    console.log("See ya soon.");
                }
            }
        ]
    }
];



    
const data = {
    name: chalk.bold.cyan("                  SUBHALINGAM D"),
    handle: chalk.white("@subhalingamd"),
    work: `${chalk.white("Undergraduate at")} ${chalk
        .hex("#800000")
        .bold("IIT Delhi")}`,
    github: chalk.gray("https://github.com/") + chalk.hex("#3E2C00").bold("subhalingamd"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.hex("#0077B5").bold("subhalingamd"),
    facebook: chalk.gray("https://facebook.com/") + chalk.hex("#3b5999").bold("subhalingamd"),
    instagram: chalk.gray("https://instagram.com/") + chalk.hex("#e4405f").bold("subhu2008"),
    web: chalk.cyan.bold("https://subhalingamd.github.io"),
    npx: chalk.red("npx") + " " + chalk.white("subhalingamd"),

    labelWork: chalk.white.bold("      Title:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelFacebook: chalk.white.bold("   Facebook:"),
    labelInstagram: chalk.white.bold("  Instagram:"),

    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelFacebook}  ${data.facebook}`,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

function header(){
    clear();

    console.log(me);
    const tip = [
        `ProTip: Try ${chalk.cyanBright.bold(
            "cmd/ctrl + click"
        )} on the links above!`,
        '',
    ].join("\n");
    console.log(tip);

}

function starter(){
    header();
    prompt(questions).then(answer => answer.action());
}

function project_prompt(){
    header();
    prompt(questions_project).then(answer => answer.action());
}

starter();