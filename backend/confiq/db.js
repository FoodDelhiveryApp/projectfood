import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://FoodApp:FoodApp@cluster0.hjneuwb.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}