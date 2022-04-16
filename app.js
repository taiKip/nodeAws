const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})



app.listen(process.env.PORT || 3000, () => {
    console.log('App listening')
});