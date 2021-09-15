const express = require('express');
const router = express.Router();
const db = require('../../db/connections');

//view all employees - 3 done 
router.get('/employees',(req,res) =>{
    const sql = `SELECT e_id, first_name, last_name, title, pay, department
                 FROM employee
                 JOIN roles ON employee.role_id = roles.r_id
                 JOIN departments ON roles.department_id = departments.d_id
                 ORDER BY e_id ASC;
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

// CREATE AN EMPLOYEE done 6

router.post('/employee',({body},res) =>{
    const sql = `INSERT INTO employee (first_name, last_name, role_id)
    VALUES(?,?,?)`;
   
    const params =[
        body.first_name,
        body.last_name,
        body.role_id];

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
//update employee role 
router.put('/employee/:id',(req,res)=>{
    const sql =`UPDATE employee SET role_id =? WHERE e_id = ?`;
    const params = [req.body.role_id, req.params.e_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        };
    });
});







module.exports = router;