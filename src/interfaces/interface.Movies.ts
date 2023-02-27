import { DeepPartial } from "typeorm";
import { z } from "zod";
import { movieSchema, ReturnAllMovie, ReturnAllMoviesSchema, returnMovieSchema, UpdateMovieSchema } from "../schemas/movies.schemas";


export type IMovie = z.infer<typeof movieSchema>

export type MovieReturn = z.infer<typeof returnMovieSchema>

export type MoviesReturn = z.infer<typeof ReturnAllMoviesSchema>

export type MoviesAllReturn = z.infer<typeof ReturnAllMovie>

export type UpdateMovie = DeepPartial<IMovie>

