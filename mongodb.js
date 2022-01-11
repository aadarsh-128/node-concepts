const { ObjectID } = require('bson')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'MongoDB-Concepts'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName);

    // Method 1
    db.collection('users').insertOne({
        name: 'Adarsh',
        age : 20
    }, (error, result)=>{
        if(error){
            return console.log('Unable to insert user')
        }
        console.log(result)
    })

    db.collection('users').findOne({name:'Adarsh'}, (error, response)=>{
        if(error){
            return console.log('Unable to fetch data')
        }
        console.log(user)
    })

    db.collection('users').findOne({_id: new ObjectID("61dd3f4b515ffedcb7ec8cad")}, (error, response)=>{
        if(error){
            return console.log('Unable to fetch data')
        }
        console.log(user)
    })

    // Method-2: Using Async-Await

    const addData = async (name, age)=>{
        const user = await db.collection('users').insertOne({name, age})
        return user;  
    }

    addData('Onix' , 20).then((data) =>{
        console.log(data);
    }).catch((e)=>{
        console.log(e);
    })
})