const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./db");
const Auth = require("./Routes/Auth");
const Dashboard = require("./Routes/Dashboard");
const authenticateToken = require("./middlewares/authenticateToken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
	res.send("Hello");
});

app.use("/v1/api/", Auth);
app.use("/v1/api/dashboard", authenticateToken, Dashboard);

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server running on port ${process.env.PORT || 3000}`);
});
