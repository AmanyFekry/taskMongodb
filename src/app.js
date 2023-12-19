const { error } = require('console');
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const dbname = 'taskdb';

MongoClient.connect(url, (error, res1) =>
{
    if (error)
    {
        return console.log('Error has been Occured')
    }
    console.log('All Perfect')

    const db = res1.db(dbname)
//task 1 insertOne 2

    db.collection('users').insertOne({
        _id: 1,
        name: 'amany',
        age: 27
    }, (error, data) =>
    {
        if (error)
        {
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({
        _id: 2,
        name: 'Karim',
        age: 27
    }, (error, data) =>
    {
        if (error)
        {
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
    // ///////////////////////////
    //insertMany 10 5 of them age =27
    db.collection('users').insertMany(
        [
            {
                _id:3,
                name: 'islam',
                age: 27
            },
            {
                _id:4,
                name: 'Ahmed',
                age: 27
            },
            {
                _id: 5,
                name: 'ayla',
                age: 30

            },
            {
                _id:6,
                name: 'ali',
                age: 35
            },
            {
                _id: 7,
                name: 'Mohamed',
                age: 27
            },
            {  
                _id:8,
                name: "amira",
                age:24
            },
            {
                _id :9 ,
                name: "Mariam",
                age: 32
            },
            {
                _id:10,
                name: 'rami',
                age: 24
            },
            {
                _id: 11,
                name: 'sara',
                age:30
            },
            {
                _id: 12,
                name: "adel",
                age: 40
            }
        ], (error, data) =>
    {
        if (error)
        {
            console.log("Error in inserting multiple documents");
        }
        console.log(data.insertedCount)
    }
    )
    /////////////////////////
    //find match age =27
    db.collection('users').find({ age: 27 }).toArray((error, users) =>
    {
        if (error)
        {
            return console.log("errorrrrr")
        }
        console.log(users);
    })
    /////////////////////////
    //limit 3 for age=27
    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) =>
    {
        if (error)
        {
            return console.log("error")
        }
        console.log(users);
    })
    ///////////////////////////////////////
    //$set name for first four doc and $inc age

    db.collection('users').updateOne( { _id: 1},  {
        $set: { name: 'zeinab' },
        $inc:{age:4}
        
    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) });
    
    db.collection('users').updateOne({ _id: 2 }, {
        $set: { name: 'merna' },
        $inc: { age:4 }

    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) });
    
    db.collection('users').updateOne({ _id: 3 }, {
        $set: { name: 'mai' },
        $inc: { age: 4 }

    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) });
    
    db.collection('users').updateOne({ _id: 4 }, {
        $set: { name: 'ibrahim' },
         $inc: { age :4 }

    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) });
    

    // db.collection('users').updateMany( { _id: { $in: [1, 2, 3, 4] } },  {
    //     $set: { name: 'zeinab' }
        
    // })
    //     .then((data1) => { console.log(data1.modifiedCount) })
    //     .catch((error) => { console.log(error) });
    //////////////////////////////////////////////
    // updatemany $inc =10 for age=27
    db.collection('users').updateMany({ age: 31 },
        { $inc: { age: 10 } })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) });
    /////////////////////////////////////////////
    //deleteMany for age 41
    db.collection('users').deleteMany({ age: 41 })
        .then((data1) => { console.log(data1.deletedCount) })
        .catch((error) => { console.log(error) });



 })
