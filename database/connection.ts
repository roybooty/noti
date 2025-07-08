import mongoose from "mongoose";
import process from "node:process";
import {DB_URI} from "../config/env.js";


if(!DB_URI){
	console.log("Mongodb URI not provided");
}


const connectToDb = async () => {
	try {
		await mongoose.connect(DB_URI);
		console.log("connected successfully")
	}catch(error){
		console.log("connect to db failes loser")
		process.exit(1)
	}
}

export default connectToDb;
