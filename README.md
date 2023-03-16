# Client-server comunication with fetch api

This is a excercise that send data from a form to the server with express, and print de response on the client console

***

## Table of contents

1. [How to run](#how-to-run)
    - [Dependencies](#dependencies)
3. [Code](#code)
    - [server.js](#serverjs)
    - [app.js](#appjs)


## How to run

- Install the dependencies and devDependencies and start the server.

    ```
    // Install node modules
    $ npm install
    //Run the server at localhost:3000
    $ npm run dev
    ```
- Go to `http://localhost:3000/html/index.html` to see the form.

## Dependencies

- express 4.18
- nodemon 2.0

***

## Code

### server.js

```sh
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
```

### app.js

```
const form = document.getElementById('update-form');

function submitHandler(){

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const url = 'http://localhost:3000/api/users'
    const dataObject = {}

    // set the dataObject with formdata values
    for (const [key, value] of formData.entries()){
      dataObject[key] = value;
    };
    
    return (put_fetchUsers(url, dataObject));
  
  });
  
}


async function put_fetchUsers (url, data){
  try {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    } 

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    
  } catch (error) {
    console.log('error en ejecucion', error);
    
  }
};

submitHandler();
```