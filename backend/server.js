const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT ||5000;
const app = express();
      
app.use('/api/station/',require('./routes/stationsRoutes'))


app.listen(port, ()=>console.log(`Starting server on port ${port}`));