import express from "express";
import { PORT } from "./config/env.js"
import noteRoute from "./routes/note.routes.ts"
import connectToDb from "./database/connection.ts"
import errorMiddleware from "./middleware/error.middleware.ts";

const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Routes
app.use("/api/v1/note", noteRoute);
app.use(errorMiddleware);
app.get("/", (req, res) => {
	res.json({
		message: "welcome to my high performance note taking api",
	});
});

app.listen(PORT, async () => {
	console.log(`Service running on http://localhost:${PORT}`);
	await connectToDb();
})
