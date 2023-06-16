const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRouter = require("./routes/user");
const notesRouter = require("./routes/notes");
const notFound = require("./middleware/notFound");

const app = express();
const PORT = process.env.PORT || 7000;

const corsOptions = {
  origin: "https://inotes-seven.vercel.app",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/n1/user", userRouter);
app.use("/api/n2/notes", notesRouter);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
