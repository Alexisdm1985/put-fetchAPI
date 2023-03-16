const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');
const notFound = require('./src/middlewares/notFound');


// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes
app.get("/", (req,res) => res.send('Home!'))

app.put("/api/users", (req, res) => {
    
    console.log(req.body)

    res.json({msg: 'Desde server'});
});

app.use(notFound);

app.listen(PORT, () => console.log(PORT));