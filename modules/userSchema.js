

const mongoose= require('mongoose')

const {Schema}=mongoose

const PersonSchema= new Schema({
name:{type:String, required:true},
age:{type:Number, default:30},
favoriteFoods:[{type:String}]

})

module.exports= mongoose.model('Person',PersonSchema)