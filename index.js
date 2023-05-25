const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const characterRouter = require("./src/api/routes/characters.routes");

dotenv.config();
const { connect } = require("./src/utils/db");

const app = express();
const PORT = process.env.PORT || 8000;
connect();
app.use(cors());
app.use(express.json());

app.use("/characters", characterRouter);

app.listen(PORT, () => console.log(`server listening on port ` + PORT));