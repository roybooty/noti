import Note from "../schema/note.ts"


// Get all Existing Note
export const GetAllNote = async (req, res, next) => {
	try{
		const notes = await Note.find()

		if(notes.length == 0){
			res.status(200).json({
				successe: true,
				message: "Notes is empty",
			})
		}

		res.status(200).json({
			sucesse: true,
			data: notes
		})
	}catch(error){
		next(error)
	}
};

// Get a single Note
export const GetSingleNote = async (req, res, next) => {
	try{
		const id = req.params.id

		const note = await Note.findById(id);

		if(!note){
			const error = new Error("could not find the Note");
			error.statusCode = 404;
			throw error;
		}
		res.status(200).json({
			sucesse: true,
			data: note,
		});

	}catch(error){
		next(error);
	}
};

// Create a new Note
export const NewNote = async (req, res, next) => {
	try{
		const { title, content } = req.body;
		
		//const find = await note.findOne({ title });

		const note = await Note.create({ title, content })

		res.status(201).json({
			sucesse: true,
			message: "note created successfully",
			data: note
		});

	}catch(error){
		next(error)
	}
};


// Update a Note
export const UpdateNote = async (req, res, next) => {
	try{
		
		const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true  });

		if(!note){
			const error = new Error("could not find note");
			error.statusCode(404);
			throw error;
		}

		res.status(200).json({
			sucesse: true,
			message: "note updated successfully",
			data: note
		})
	}catch(error){
		next(error)
	}
};

// Delete a Note
export const DeleteNote = async (req, res, next) => {
	try{
		const id = req.params.id;

		const exist = await Note.findById(id);

		if(!exist){
			const error = new Error("could not find note");
			error.statusCode = 404;
			throw error;
		}

		await Note.findOneAndDelete(id);

		res.status(200).json({
			sucesse: true,
			message: "Note Deleted successfully",
		});

	}catch(error){
		next(error)
	}
};
