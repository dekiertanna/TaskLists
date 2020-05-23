const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//routes




var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/task.routes')(app);
require('./app/routes/tasklist.routes')(app);

const db = require("./app/models");

db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and Resync DB");
})

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}.')
})