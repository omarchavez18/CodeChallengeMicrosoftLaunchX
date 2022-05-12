//No olvides importar el módulo del filesystem const fs = require("fs");
const fs = require("fs");

class Reader {
  /*Crea un método static llamado
   readJsonFile que reciba un path (este deberá ser el path al archivo a leer*/
  static readJsonFile(path) {
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
  }
}

module.exports = Reader;
