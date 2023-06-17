const colors = require("colors");
const { number } = require("yargs");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:"Es la base de la tabla de multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en la consola'
  })
  .option("h",{
    alias:"hasta",
    type:"number",
    describe:"Es hasta el numero por el cual se va a multiplicar la base"
  })
  
  .check((argv, options) => {
    if (isNaN(argv.b && argv.h)) {
      throw"El multiplicando y el multiplicador tienen que ser numeros ".rainbow;
    }
    return true;
  }).argv;

  module.exports = argv
