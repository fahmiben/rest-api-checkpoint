const mongoose = require('mongoose');


// mongoose and connect to db -----------
const DBconnect=async()=>{

    try {
        await mongoose.connect('mongodb://localhost:27017/mydb'); 
        console.log("database is connected");
    } catch (error) {
      console.log(`cannot connect to database${error}`);  
    };
};

module.exports = DBconnect;