class studentService {
  //consultar nombres de los estudiantes
  static filterStudents(partners) {
    const students = partners.map((partner) => partner.name);
    return students;
  }

  // consultar los emails de todos los estudiantes que tengan certificación haveCertification
  static getEmails(partners, haveCertification) {
    const emailsByCertification = partners.filter(
      (partner) => partner.haveCertification === haveCertification
    );

    const studentsEmails = emailsByCertification.map(
      (partner) => partner.email
    );
    return `Lista de Emails de estudiantes con certificación:${studentsEmails}`;
  }

  // consultar todos los estudiantes que tengan credits mayor a 500.

  static getStudentCredit(partners) {
    const studentsWithCredits = partners.filter(
      (partner) => partner.credits > 500
    );
    const userStudentsname = studentsWithCredits.map((partner) => partner.name);
    return `Estos son los estudiantes con creditos arriba de 500:${userStudentsname}`;
  }
}

module.exports = studentService;
