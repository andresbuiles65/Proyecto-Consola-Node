const { option, options, boolean } = require("yargs");
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

                


console.clear();
console.log(argv);
//console.log(argv.b,argv.l,argv.h);


//const [, , arg3 = 'base=5']= process.argv;
//const [, base =5] = arg3.split('=')

//const base =3 ;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo =>console.log(nombreArchivo.bgWhite.green,'creado exitosamente con promesas'.bgWhite.green))
.catch(err => console.log(err));




