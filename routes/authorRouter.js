const express = require('express')
const router = express.Router();

const { getAuthors,
    putAuthors,
    deleteAuthors,
    postAuthors} = require("../controllers/controller");

// create
    router.post('/authors',postAuthors);
// read
    router.get('/authors',getAuthors);
// update
    router.put('/authors/:id',putAuthors);
// Delete
    router.delete('/authors/:id',deleteAuthors);


   



    module.exports = router;

