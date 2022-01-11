const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/MongoDB-Concepts-2', {
    useNewUrlParser: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is in invalid')
            }
        }
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        validite(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }else if(value<18){
                throw new Error('User must be 18 and above')
            }
        }
    }
})

const me = new User({
    name: 'Adarsh1',
    email: 'adarsh@',
    age: 10
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!', error)
})