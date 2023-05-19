const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const CartRoute=require("./routes/cart")
const OrderRoute=require("./routes/order")
const cors=require("cors") ;
app.use(cors()) ;
app.use(express.json()) ;


app.use("/api/auth",authRoute) ;
app.use("/api/users",userRoute) ;
app.use("/api/products",productRoute) ;
app.use("/api/carts",CartRoute) ;
app.use("/api/orders",OrderRoute);


const connect =async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db");
    app.listen(process.env.PORT||5000,()=>{
        console.log("listeninig on port 5000...") ;
    });
    
   }catch(err){
    console.log(err) ;
   }

}

connect() ;