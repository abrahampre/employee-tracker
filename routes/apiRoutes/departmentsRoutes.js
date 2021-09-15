const express = require('express');
const router = express.Router();
const db = require ('../../db/connections');


//get all departmets -done -1
router.get('/departments',(req,res) =>{
    const sql = `SELECT * FROM departments`;

    db.query(sql,(err, rows) => {
        if(err){
            res.status(500).json({error:err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});
//CREATE a department - DONE 4 
router.post('/department',({body},res) =>{
    const sql = `INSERT INTO departments (department)
    VALUES(?)`;
    
    const params =[body.department];

    db.query(sql,params,(err, result) =>{
        if (err){
            res.status(400).json({error:err.message});
            return;
        }
        res.json({
            message: 'success',
            data:body
        });
    });
})


module.exports = router