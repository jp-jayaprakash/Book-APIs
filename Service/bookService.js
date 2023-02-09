const { param, search } = require('..');
const  bookRepo= require('../Repositary/bookRepo')
const errorcode = require('../errorcode')
const puppeteer= require('puppeteer')
const hbs = require('handlebars')
const fs = require('fs-extra');
const { compile, template } = require('handlebars');
const path = require('path');
const { updateid } = require('../validation');
require('C:/bookApp/index.hbs');


exports.createBook= async(data)=>{
    try{
        
        const response = await bookRepo.createBook(data)
        return response;
    }
    catch(err)
    {
        throw err;

    }
}

exports.getBook= async(data)=>{
    try{
        const{page ,limit }= data
        const query = [{ $match: { isDeleted: false } }, { $skip: (page * 1 - 1) * (limit * 1) }, { $limit: limit * 1 }]
        const response = await bookRepo.getBook(query)
        return response;
    }
    catch(err){
        throw err
    }
}

exports.deleteBook= async(param)=> {
    try{
        let delquery =[{bookId:param},{isDeleted:true}]
        const response = await bookRepo.deleteBook(delquery)
        return errorcode.DELETE_SUCESS ;
        
    }
    catch (err)
    {
        throw err
    }
}

exports.checkInStock= async(param, stock)=> {
    try{
        await updateid(stock)
        const query = [{bookId:param},{inStock:stock}]
        const response = await bookRepo.checkInStock(query);
        return response
    }
    catch( error){

        if(error.message === errorcode.INVALID_INPUT_FORMAT_ERROR.message)
        {
            return errorcode.INVALID_INPUT_FORMAT_ERROR
        }
    }
}
exports.searchByBook= async(data,search)=> {
    try{
        const{page, limit }=data
        if(search != null && page != null && limit != null)
            {
            const query=([{$match:{title:new RegExp(`^${search}`,"i")}},{$skip:(page-1)*limit},{  $limit:limit*1}])
            const response = await bookRepo.searchByBook(query)
            return response;
        }
         else{
            const params =([{$limit:limit*1}])
                 const response = await bookRepo.searchByBook(params)
                 return response
        }     
    }    
    catch (err)
    {
        throw err
    }
}
exports.searchByyear= async(data, search)=>{
    try{
       const{page, limit }=data;
        if(search != null && page != null && limit != null)
        {
            const params=([ 
                {$match:{published_date:new RegExp(`^${search}`,"i")}},
                {$skip:(page-1)*limit},   {$limit:limit*1}
            ])
            const response = await bookRepo.searchByyear(params)
            return response
        }    
        else
        {
            const params = ([
                {
                    $limit:limit*1
                }
            ])
            const  response = await bookRepo.searchByyear(params)
            return response //errorcode.INVALID_INPUT_FORMAT_ERROR
        }

    }
    catch(err)
    {
        throw err
    }
}
exports.createPdf= async(params)=>{
    try{
        const query = ([
            {
                $match:
                    {bookId:params}              
            }
        ])
     // const query = ([ { $match: { $and: [{ 'isDeleted': false }, { orderId: params }] } }
        const result = await bookRepo.createPdf(query);
        const data = result[0]
        console.log("++++",data)


        var pdf1 =  await this.fun(data)
        
        //const data = result[0]
       // console.log("<><<><><",pdf1)
        return pdf1 ;
        
        

    }
    catch(err){
        throw err
    }
}
   // const compile= async(templateName, data)=>{
    exports.compile= async(templateName,data)=>{ 

    const filePath = path.join(process.cwd(),`${templateName}`)
    console.log('********',filePath);

    const html = await fs.readFile(filePath, 'utf8')
    console.log("HBS",data);
   // console.log("HTML",html);
    return hbs.compile(html)(data)
    

};
exports.fun = async(data)=>{
    try{
        console.log("PDF",data);
        const browser  = await puppeteer.launch();
        console.log('!!!!',browser);
        const page = await browser.newPage();
        console.log("PAGE",page);
        // await page.setContent('index',data)
        const content = await this.compile('index.hbs',data)
        await page.setContent(content)
        
        
        //create a pdf Document
         await page.pdf({
            path:'bookFiles`.pdf',
            formate: 'A4',
            printBackground: true
         })
         console.log('done creating pdf');

         await browser.close()
         return `PDF created Sucessfully`
    }
    catch(err){
        throw err
    }

}





















// SERVICES

 // else if(search != undefined && search != null)
        // {
        //     const params = ([
        //         {
        //             $match:{published_date:new RegExp(`^${search}`,"i")},
        //         }
        //     ]) 
        //     const response = await bookRepo.searchByyear(params)
        //     return response
        // }
        // else if ( search == null && !limit)
        // {
        //     const params = ([
        //         {
        //             $match:{published_date:new RegExp(search,"i")},
        //         }
        //     ])
        //     const response = await bookRepo.searchByyear(params)
        //     return response
        // }