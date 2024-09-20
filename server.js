const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage Of The App");
});

app.use('/api', bookRoutes)
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});