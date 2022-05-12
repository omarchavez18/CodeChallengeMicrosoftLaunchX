const partners = require("./../../visualpartners.json");
const studentService = require("./../../services/studentService");
//obtener lista de estudiantes.
describe("obtener lista de estudiantes del json", () => {
  test("prueba 1) lista de estudiantes", () => {
    const listaDeEstudiantes = partners.map((partner) => partner.name);
    const alumnos = studentService.filterStudents(partners);
    expect(alumnos).toStrictEqual(listaDeEstudiantes);
  });

  //lista con los emails de todos los estudiantes que tengan certificación "haveCertification".
  test("prueba 2) emails de estudiantes con certificacion", () => {
    const listaEmails = studentService.getEmails(partners, true);
    const correosPorCertificacion = partners.filter(
      (partner) => partner.haveCertification == true
    );
    const todosCorreos = correosPorCertificacion.map(
      (partner) => partner.email
    );
    expect(listaEmails).toStrictEqual(
      `Lista de Emails de estudiantes con certificación:${todosCorreos}`
    );
  });

  //lista de estudiantes que tengan credits mayor a 500.
  test("prueba 3) lista de estudiantes con credits mayor a 500", () => {
    const estudiantesCredits = partners
      .filter((partner) => partner.credits > 500)
      .map((partner) => partner.name);

    const credits = studentService.getStudentCredit(partners);
    expect(credits).toBe(
      `Estos son los estudiantes con creditos arriba de 500:${estudiantesCredits}`
    );
  });
});
