const express = require('express');
const ctrl = require(`./userCtrl`);
const bodyParser = require('body-parser');

const app = express();

// app.use(express.json());
app.use(bodyParser.json());

// endpoint 1
app.get('/api/user', ctrl.getEntireUserArray)

// endpoint 2
app.get(`/api/user/:userId`, ctrl.getByUserID)

// endpoint 3
app.get(`/api/admin`, ctrl.getByAdmin)

// endpoint 4
app.get('/api/nonadmin', ctrl.getByNonAdmin)

// endpoint 5
app.get('/api/type/:userType', ctrl.getByType)

// endpoint 6
app.put('/api/user/:userId', ctrl.updateUserByID)

// endpoint 7


// endpoint 8


app.listen(3000, ()=>{
    console.log(
        `listening 3000`
    );
});