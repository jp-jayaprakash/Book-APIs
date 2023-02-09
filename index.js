const express = require('express')
const mongoose = require('mongoose')
require('dotenv')
const app = express();
const fs = require('fs-extra');

//const router= express.Router();
const bookController = require('./Controller/bookController.js')

const swaggerjsDoc  = require('./swagger.json')
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerjsDoc))

app.use(express.json());

//app.use('/v1', router)

app.post('/v1/createBook', bookController.createBook)
app.get('/v1/getAllBook',bookController.getBook)
app.patch('/v1/deleteBook/:id',bookController.deleteBook)
app.patch('/v1/checkStock/:id',bookController.checkInStock)
app.get('/v1/searchBookTitle', bookController.searchByBook)
app.get('/v1/searchPublished_Year', bookController.searchByyear)
app.get('/v1/generatePDF/:id',bookController.createPdf)









// router.route('/')
//       .post(bookController.createBook)
const url = "mongodb://localhost:27017";
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log("DB is connected");
    console.log(url);
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})

module.exports = app;
//module.exports = router;