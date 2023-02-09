
const errorcode = require('.//errorcode')
const bookSchema = require('./Schema/bookSchema.js')
const _ = require('lodash')
exports.pagination = async(page, limit)=>{
    if(typeof (page =="string") && typeof (limit=="string")){
        page = parseInt(page);
        limit = parseInt(limit);
        if(isNaN(page) || isNaN(limit)){
            throw new Error(errorcode.INVALID_INPUT_FORMAT_ERROR.message)
        }
        else{
            return {page:page,limit:limit};
            return true;
        }
    }
    else{
        return {page:page,limit:limit};
    }    
}

exports.checkId = async(bookid)=>{
        const response = await bookSchema.find({bookId:bookid},{isDeleted:false})
        if(response.length == 0){
            throw new Error (errorcode.INVALID_ID.message)
        }
}

exports.updateid = async(update)=>{
    if(_.isString(update)&& update !="" )
    {
         return {update} 
    }
    else{
        throw new Error(errorcode.INVALID_INPUT_FORMAT_ERROR.message)
    }
}

// exports.suggestion= async(page,limit, search)=>{
//     if(typeof (page=="String") && typeof (limit=="String") && )
//     {

//     }

// }
    


