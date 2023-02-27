import { Request, Response } from "express";
import { Movie } from "../entities";
import { createMovieService } from "../services/movies/createMovies.service";
import { deleteMovieService } from "../services/movies/deleteMovie.service";
import { listAllMovieService } from "../services/movies/listAllMovies.service";
import { updateMovieService } from "../services/movies/updateMovie.service";

export const createMovieController = async (req: Request, res: Response) => {
    const movieData: Movie = req.body

    const NewMovie = await createMovieService(movieData)

    return res.status(201).json(NewMovie)
}

export const listAllMovieController = async (req: Request, res: Response) => {

    const { page, perPage} = req.query
    const { order, sort} = req.query

    const Movies = await listAllMovieService(page, perPage, order, sort)

    return res.status(200).json(Movies)
} 
 
export const deleteMovieController = async (req: Request, res: Response) => {

    const Movies = await deleteMovieService(Number(req.params.id))

    return res.status(204).send()
}

export const updateMovieController = async (req: Request, res: Response) => {

    const Data = req.body
    const Id = Number(req.params.id)

    const UpdateMovies = await updateMovieService(Data, Id)

    return res.status(200).json(UpdateMovies)
}