
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log('mongo db connection failed!!!')
})



/*
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log('ERRR',error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`APP is listening on port ${process.env.port}`)
        })
    }
    catch(error){
        console.error(error)
        throw error
    }
})()

*/