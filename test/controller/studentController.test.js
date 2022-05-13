const studentController = require("./../../controllers/studentController");
const partners = require("./../../visualpartners.json");

describe("Pruebas de studentController", () => {
  test("prueba 1) getstudents", () => {
    const studentNotes = partners.map((partner) => partner.name);
    const studentsNames = studentController.getStudents(partners);
    expect(studentsNames).toStrictEqual(studentNotes);
  });

  test("prueba de getEmailsStudents", () => {
    const emailStudents = partners
      .filter((partner) => partner.haveCertification === true)
      .map((partner) => partner.email);

    const correos = studentController.getEmailsStudents(true);
    expect(correos).toStrictEqual(
      `Lista de Emails de estudiantes con certificación:${emailStudents}`
    );
  });
  test("prueba de getStudentCreditList", () => {
    const credit = partners
      .filter((partner) => partner.credits > 500)
      .map((partner) => partner.name);

    const creditstudents = studentController.getStudentCreditList(partners);
    expect(creditstudents).toStrictEqual(
      `Estos son los estudiantes con creditos arriba de 500:${credit}`
    );
  });
});
