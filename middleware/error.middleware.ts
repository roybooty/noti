const errorMiddleware = (err, req, res, next) => {
	try{
		let error = { ...err };
		error.message = err.message;

		if(err.name == 'CastError'){
			const message = "Resources not found";
			error = new Error(message);
			error.statusCode = 404;
		}

		res.status(error.statusCode || 500).json({
			success: false,
			error: error.message || 'Server Error'
		})
	}catch(error){
		next(error);
	}
}

export default errorMiddleware;
