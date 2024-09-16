const express = require('express');

const cors = require('cors');

const app = express();

var crosOptions = {
    origin: 'http://localhost:8081'
}

//middleware

app.use(cors(crosOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello from api' });
})


//routers

const productsRouter = require('./Routes/productRouter');
app.use('/api/products', productsRouter);

const reviewRouter = require('./Routes/reviewRouter');
app.use('/api/reviews', reviewRouter);



//port


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
})


