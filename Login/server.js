const express = require('express');

const app= express(); 
app.use('express.json()');

app.get('/', (req, res) => {
    res.send('Hello Coders!')
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Your application is running in ${PORT}")
});


