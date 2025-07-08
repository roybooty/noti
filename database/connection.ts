import mongoose from "mongoose"
import {DB_URI} from "../config/env.js"

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
