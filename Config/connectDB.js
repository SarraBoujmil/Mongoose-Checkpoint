const mongoose= require('mongoose')


const connectDB=()=>
{ mongoose.connect('mongodb+srv://sarraboujmil:QtMbcDof8fro8X2X@cluster0.7rgyboy.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('DB connected'))
.catch((err)=>console.log(err))
}

module.exports=connectDB
