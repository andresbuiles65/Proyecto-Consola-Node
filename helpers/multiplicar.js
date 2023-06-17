const fs = require("fs");
const crearArchivo = async (base = 5 , lista=false, hasta) => {

  try {
    if(lista){
    console.log("================================= ".rainbow);
    console.log(`         Tabla del:  ${base}       `);
    console.log("==================================".rainbow);
    }
    
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `El resultado de ${base} * ${i} es : ${base * i} \n`;
      consola+= `El resultado de ${base} ${'*'.yellow} ${i} es ${":".yellow} ${base * i} \n`.inverse;
    }
    if(lista){
      console.log(consola);
    }
    

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

      return `Tabla-${base}.txt`;
      
  } catch (err){
    throw err.green;
    
  }

    
};

module.exports = {
  crearArchivo
};
