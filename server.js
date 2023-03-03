const express = require('express')
const app = express()
const port = 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get("/", (req,res) => res.send('Home!'))

app.put("/api/users", (req, res) => {
    
    console.log(req.body)

    res.json({msg: 'Desde server'});
});


app.listen(port, () => console.log(port));