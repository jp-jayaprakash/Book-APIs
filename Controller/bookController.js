const bookService = require('../Service/bookService')
const { v4: uuidv4 } = require('uuid');
const { pagination, checkId, suggestion } = require('../validation');
const errorcode = require('../errorcode')

async function createBook(req, res) {
    try {
        let id = uuidv4();
        let data = req.body;
        data.bookId = id;
        console.log(data);

        const result = await bookService.createBook(data)
        //res.json({ result: result })
        res.status(200).json({
            "data":result
        })
    }
    catch (err) {
        throw err;
    }
}
 async function getBook (req,res) {
    try{
        let page  = req.query.page ||1;
        let limit =req.query.limit ||5;
        const data = await pagination(page, limit)
        const result = await bookService.getBook(data)
        res.json({result:result})
    }
    catch (err){
        if(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message){
            console.log(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message);
            res
            .status(errorcode.INVALID_INPUT_FORMAT_ERROR.status)
            .send(errorcode.INVALID_INPUT_FORMAT_ERROR)
        }

    }
}

async function deleteBook(req, res) {
    try{
        const param = req.params.id;
        await checkId(param);
        const result = await bookService.deleteBook(param)
        res.status(200).json({
            "param":result
        })
    }
    catch (err){
        if(err.message === errorcode.INVALID_ID.message){
            res
            .status(errorcode.INVALID_ID.status)
            .send(errorcode.INVALID_ID)
        }
    }
}
//module.exports(checkStock) = async(req, res)=> 

async function checkInStock(req, res){
    try{
        
        const param = req.params.id;
        const stock = req.body.inStock;
        await checkId(param)
        const result = await bookService.checkInStock(param,stock)
        res.status(200).json({
            "stock":result
        })
    }
    catch(error)
    {
        if(error.message === errorcode.INVALID_ID.message)
        {
            res
            .status(errorcode.INVALID_ID.status)
            .send(errorcode.INVALID_ID)
        }
    }
}
 async function searchByBook(req, res){
    try{
        let page  = req.query.page ||1;
        let limit =req.query.limit ||10;
        let search = req.query.search;
        const data = await pagination(page,limit)
        const result = await bookService.searchByBook(data,search)
        res.status(200).json({
            "params":result
        })
    }
    catch (err){
        if(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message){
            console.log(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message);
            res
            .status(errorcode.INVALID_INPUT_FORMAT_ERROR.status)
            .send(errorcode.INVALID_INPUT_FORMAT_ERROR)
        }
    }
 }

 async function searchByyear(req,res){
    try{
        let page = req.query.page || 1;
        let limit = req. query.limit ||15;
        const search= req.query.search;
        const data  = await pagination(page,limit)
        
        const result = await bookService.searchByyear(data,search)
        res.status(200).json({
            "params":result
        })

    }
    catch (err){
        if(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message){
            console.log(err.message == errorcode.INVALID_INPUT_FORMAT_ERROR.message);
            res
            .status(errorcode.INVALID_INPUT_FORMAT_ERROR.status)
            .send(errorcode.INVALID_INPUT_FORMAT_ERROR)
        }
        
    }
 }
 async function createPdf(req, res){
    try{
        const params = req.params.id;
        const finalData= await bookService.createPdf(params)
        res.status(200).json({
            "params":finalData
        })
    }
    catch(err){
        throw err
    }
 }

module.exports = {createBook,getBook,deleteBook,checkInStock, searchByBook,searchByyear,createPdf};
//module.exports= {createBook};

