const studentService = require("./../services/studentService");
const Reader = require("./../utils/Reader");

class studentController {
    static getStudents() {
        const partners = Reader.readJsonFile("visualpartners.json");
        return studentService.filterStudents(partners);
    }

    static getEmailsStudents(haveCertification) {
        const partners = Reader.readJsonFile("visualpartners.json");
        return studentService.getEmails(partners, haveCertification);
    }

    static getStudentCreditList() {
        const partners = Reader.readJsonFile("visualpartners.json");
        return studentService.getStudentCredit(partners);
    }
}

module.exports = studentController;
