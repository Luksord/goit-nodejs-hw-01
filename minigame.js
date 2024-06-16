// console.log(process.argv);

// import { program } from "commander";
const { program } = require("commander");
const fs = require("fs");
const readline = require("readline");
require("colors");

const DEFAULT_MAX = 10;

//flags
program.option("-f, --file [string]", "file for saving results", "results.txt");
program.option(
  "-m, --max-value [number]",
  "max value for the game",
  DEFAULT_MAX
);

// const flags = program.parse(process.argv).opts();
const { file, maxValue } = program.parse(process.argv).opts();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`Wprowadź liczbę od jeden do ${maxValue}: `.yellow, (value) => {
//   console.log(value);
//   rl.close();
// });

// // console.log(flags);
// console.log(file, maxValue);
// console.log("red".red);
// console.log("green".green);

let numberOfTries = 0;
const max = maxValue ? parseInt(maxValue) : DEFAULT_MAX;
const generateRandomNumber = () => Math.floor(Math.random() * max) + 1;
let numberToGuess = generateRandomNumber();
let isNewGame = true;

const logResults = async () => {
  try {
    await fs.appendFile(
      file,
      `${new Date().toDateString()}` |
        `Udało ci się zgadnąć w ${numberOfTries} podejściem.`.yellow |
        `${numberToGuess} \n`
    );
  } catch (error) {
    console.log(error);
    console.log("Nie udało się zapisać do pliku.".red);
  }
};

const gameTick = () => {
  isNewGame = false;
  rl.question(`Wprowadź liczbę od 1 do ${max}: `.yellow, async (value) => {
    const parsedGuess = parseInt(value);
    if (value === "quit" || value === "q") {
      rl.close();
      return;
    }
    numberOfTries++;
    if (parsedGuess === numberToGuess) {
      console.log("Wygrałeś!!!".green);
      await logResults();
      game();
      numberToGuess = generateRandomNumber();
      // rl.close();
    } else {
      console.log("Nie udało się. Spróbój jeszcze raz.".red);
      gameTick();
    }
  });
};

const game = () => {
  if (isNewGame) {
    console.log(`Witaj w grze, zgadnij liczbę od 1 do ${max}: `);
  } else {
    console.log("Gramy dalej?");
  }
  numberOfTries = 0;
  gameTick();
};

game();
