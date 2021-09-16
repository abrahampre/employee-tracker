const express = require('express');
const db = require('./db/connections');
const apiRoutes = require('./routes/apiRoutes');

const PORT  = process.env.PORT || 3001;
const app =  express();

// express middleware 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//api routes
app.use('/api',apiRoutes);


//default response for any other requests(not found)
app.use((req,res)=>{
    res.status(404).end();
})

db.connect( err=> {
    if(err) throw err;
    console.log('Database Connected.')

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    });

})
