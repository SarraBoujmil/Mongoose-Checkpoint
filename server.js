
const express=require('express')
const connectDB= require('./Config/connectDB')
const Person= require('./modules/userSchema')

const app= express()
connectDB()
const port=8080

const addPerson=async()=>{
    const newPerson= new Person({name:"Sarra",age:32,favoriteFoods:["couscouss","pasta","brocoli"]})
    await newPerson.save()
}
//addPerson()

const arrayOfPeople= [{name:"Hela",age:27, favoriteFoods:["pizza,sandwich"]},{name:"Amina",age:33,favoriteFoods:["salmon","chicken"]}]
//Person.create(arrayOfPeople)

const searching= async()=>{
   const personne= await Person.find({name:"Sarra"})
   console.log(personne)
}
//searching()

const searchingOne= async()=>{
    const one=await Person.findOne({favoriteFoods:{ $in: [food] } })
    console.log(one)
}
const food="salmon"
//searchingOne(food)

const personId='649f04c5d595345ef1454de2'

const searchById=async()=>{
    const p1=await Person.findById(personId)
    console.log(p1)
}
//searchById()
const suppression = async()=>{
    await Person.deleteMany({name:"Sarra"})
    console.log('deleted')
}
//suppression()

const classicUpdate= async()=>{
   const doc=await Person.findById("649f04c5d595345ef1454de2") 
   doc.favoriteFoods.push('Burritos');
   doc.markModified('favoriteFoods')
    await doc.save()
   console.log('see result:')
   console.log(doc)
}
//classicUpdate()

const update2= async()=>{
   const doc= await Person.findOneAndUpdate({name:'Sarra'},{age:23},{new:true})
   console.log(doc)
}
//update2()
const supprimer1=async(personId)=>{
console.log(await Person.findByIdAndRemove(personId))
console.log('suppression terminée')
}
const idd='649f092c7da22346d12908e1'
//supprimer1(idd)

const query={name:'Hela'}
const removeFunction=async(query)=>{

const result=await Person.deleteMany(query)
console.log(result.deletedCount)
}
//removeFunction(query)
const findBurritoLovers = async() => {
    const data=await Person.find({ favoriteFoods: 'Burritos' })
      .sort('name')
      .limit(2)
      .select('-age')
      console.log('here we are')
      //console.log(data)
      return data
      };
  
  
  // Call the findBurritoLovers function
  findBurritoLovers().then((data)=>{console.log(data)})
  
app.listen(port,(err)=>{err?console.log(error):console.log(`server running on port ${port}`)})