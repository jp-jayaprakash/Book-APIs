const mongoose = require('mongoose')

const BookSchema= mongoose.Schema({
    
    bookId:
            {
                type :String,
                require:true,
                unique:true
            },
    title: 
            {
                type: String,
                require: true
            },
    author: 
            {
                type: String,
                require: true
            },
    description: 
            {
                type: String,
            },
    published_date: 
            {
                type: String,
            },
    publisher: 
            {
                type: String,
            },
    pages: 
            {
                type: Number, 
            },
    inStock:
            {
                type : String,
            },
    isDeleted:
            {
                type:Boolean,

            }
})

module.exports= mongoose.model('bookapp',BookSchema)
