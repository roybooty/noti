import { Router } from "express";
import { GetAllNote, GetSingleNote, NewNote, UpdateNote, DeleteNote } from "../controllers/note.controller.ts";

const noteRoute = Router();

noteRoute.get('/', GetAllNote);
noteRoute.get('/:id', GetSingleNote);
noteRoute.post('/', NewNote);
noteRoute.put('/:id', UpdateNote);
noteRoute.delete('/:id', DeleteNote);

export default noteRoute;
