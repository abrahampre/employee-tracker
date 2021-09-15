const express = require('express');
const PORT  = process.env.PORT || 3001;
const app =  express();
const mysql =  require('mysql2')
// express middleware 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'LamaineroCoronado1!',
        database:'etracker'
    },
    console.log('Connected to the election database.')
)

//get all departmets -done -1

app.get('/api/departments',(req,res) =>{
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
//view all roles -2 done
app.get('/api/roles',(req,res) =>{
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

//view all employees - 3 done 
app.get('/api/employees',(req,res) =>{
    const sql = `SELECT e_id, first_name, last_name, title, pay, department
                 FROM employee
                 JOIN roles ON employee.role_id = roles.r_id
                 JOIN departments ON roles.department_id = departments.d_id
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

//CREATE a department - 4 

app.post('/api/department',({body},res) =>{
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

//CREATE a ROLE 


app.post('api/role',({body},res) =>{
    const sql = `INSERT INTO roles (title, pay, department_id)
    VALUES(?,?,?)`;
    //INSERT INTO roles (title, pay, department_id) VALUES(Custodian,15000,1)
    const params =[
        body.title,
        body.pay,
        body.department_id];

    db.query(sql,params,(err, res) =>{
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





app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

db.query(`SELECT * FROM departments`, (err,rows)=>{
    console.log(rows);
})

//default response for any other requests(not found)
app.use((req,res)=>{
    res.status(404).end();
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});