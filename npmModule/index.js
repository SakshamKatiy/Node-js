const chalk = require("chalk");
// import chalk from chalk
console.log(chalk.green.underline.inverse("false"));


const validator = require("validator");
const res = validator.isEmail("saksham@sam.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));