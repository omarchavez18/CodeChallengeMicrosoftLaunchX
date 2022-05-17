const studentController = require("./controllers/studentController");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

//endpoint prueba de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Welcome Code Challenge User" });
});

// Habilitar un endpoint para consultar todos los estudiantes
app.get("/students", (req, res) => {
  const explorersStudents = studentController.getStudents();
  res.json(explorersStudents);
});

// Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
app.get("/students/emails", (req, res) => {
  const haveCertification = req.params.haveCertification === "true";
  const correosAlumnos = studentController.getEmailsStudents(haveCertification);
  res.json(correosAlumnos);
});

// Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
app.get("/students/credits", (req, res) => {
  const credits = req.params.credits;
  const studentCredits = studentController.getStudentCreditList(credits);
  res.json(studentCredits);
});

app.listen(port, () => {
  console.log("Code Challenge Server Ready!!");
});
