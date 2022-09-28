//package include
const express           = require('express');
const dotenv            = require('dotenv');
const customersRouter   = require('./routes/customersRouter');
const tagRouter         = require('./routes/tagRouter');
const categoryRouter    = require('./routes/categoryRouter');
const productRouter     = require('./routes/productRouter');

//Environment variable 
dotenv.config();
const PORT = process.env.PORT || 4040;

//express init
const app = express();

//middleware init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//public folder static
app.use(express.static('public'));

//API init
app.use('/api/v1/customers', customersRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/tag', tagRouter);

//server listen
app.listen(PORT, ()=>{
    console.log(`server running on port : ${PORT}`);
})
