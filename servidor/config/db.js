const mongoose=require('mongoose');
require('dotenv').config({path:'variables.env'});

const conectarDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModifify: false
        })
        console.log('base de tados conectada')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectarDB