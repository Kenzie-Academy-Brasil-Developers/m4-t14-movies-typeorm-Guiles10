import { Request, Response } from "express";
import { Movie } from "../entities";
import { CreateMovieService } from "../services/Movies/CreateMovies.service";
import { DeleteMovieService } from "../services/Movies/DeleteMovie.service";
import { ListAllMovieService } from "../services/Movies/ListAllMovies.service";
import { UpdateMovieService } from "../services/Movies/UpdateMovie.service";

export const CreateMovieController = async (req: Request, res: Response) => {
    const movieData: Movie = req.body

    const NewMovie = await CreateMovieService(movieData)

    return res.status(201).json(NewMovie)
}

export const ListAllMovieController = async (req: Request, res: Response) => {

    const { page, perPage} = req.query

    const Movies = await ListAllMovieService(page, perPage)

    return res.status(200).json(Movies)
} 

export const DeleteMovieController = async (req: Request, res: Response) => {

    const Movies = await DeleteMovieService(Number(req.params.id))

    return res.status(204).send()
}

export const UpdateMovieController = async (req: Request, res: Response) => {

    const Data = req.body
    const Id = Number(req.params.id)

    const UpdateMovies = await UpdateMovieService(Data, Id)

    return res.status(200).json(UpdateMovies)
}