const { query } = require('express');
const mongoose = require('mongoose');
//const { param } = require('..');
const bookSchema = require('../Schema/bookSchema')

exports.createBook= async(params)=>{
    try{
        const result = await bookSchema.create(params);
        return result ;

    }
    catch (err){
        throw err ;
    }
}
exports.getBook= async(query)=>{
    try{
        const result = await bookSchema.aggregate(query);
        return result

    }
    catch(err){
        throw err
    }
}
exports.deleteBook= async(delquery)=>{
    try{
        const result = await bookSchema.findOneAndUpdate(delquery[0],delquery[1])
        return result
    }
    catch (err){
        throw err
    }
}
exports.checkInStock= async(query)=>{
    try{
        const result = await bookSchema.findOneAndUpdate(query[0],query[1])
        return result ;
    }
    catch (err)
    {
        throw err
    }
}

exports.searchByBook= async(query,params)=> {
    try{
         const result = await bookSchema.aggregate(query,params)
         return result
    }
    catch (err)
    {
         throw err
    }
}
exports.searchByyear= async(params)=>{
    try{
        const result = await bookSchema.aggregate(params)
        return result ;
        
    }
    catch(err)
    {
        throw err
    }
}
exports.createPdf= async(query)=>{
    try{
        console.log("?????",query);
        const result = await bookSchema.aggregate(query)
        return result;
    }
    catch(err){
        throw err
    }
}