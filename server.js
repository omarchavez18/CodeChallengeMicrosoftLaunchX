const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome Code Challenge user " });
});

app.listen(port, () => {
  console.log("Code Challenge Server Ready!!");
});
