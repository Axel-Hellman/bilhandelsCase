const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; //sätter porten till 5000 (3000 skulle ha stört REACTs port)

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  //efter vi skapat en connection får vi nedanstående sträng som bekreftelse
  console.log("MongoDB database connection established successfully");
});

//importerar de skapade rout-filerna
const carmodelsRouter = require("./routes/carmodels");
const employeesRouter = require("./routes/employees");
const salesRouter = require("./routes/sales");
const usersRouter = require("./routes/users");

//sätter med vilken url-text routerna ska anropas
app.use("/carmodels", carmodelsRouter);
app.use("/employees", employeesRouter);
app.use("/sales", salesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
