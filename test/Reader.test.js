const Reader = require("../utils/Reader");
const partners = require("../visualpartners.json");

describe("testing de Reader.js", () => {
  test("read visualpartners.json file", () => {
    const prueba = Reader.readJsonFile("visualpartners.json");
    expect(prueba).toStrictEqual(partners);
  });
});
