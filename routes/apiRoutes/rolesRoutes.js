const express = require('express');
const router = express.Router();
const db = require ('../../db/connections');

//view all roles -2 done
router.get('/roles',(req,res) =>{
    const sql = `SELECT title,r_id, department, pay 
                FROM roles
                INNER JOIN departments
                ON roles.department_id = departments.d_id
                `;

    db.query(sql,(err,rows)=>{
        if(err){
            res.status(500).json({error:err.message});
            return;
        }
        res.json({
            message: 'success',
            data:rows
        });
    })
});




//CREATE a ROLE -done 5


router.post('/roles',({body},res) =>{
    const sql = `INSERT INTO roles (title, pay, department_id)
    VALUES(?,?,?)`;
   
    const params =[
        body.title,
        body.pay,
        body.department_id];

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

module.exports = router;