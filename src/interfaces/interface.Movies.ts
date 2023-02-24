import { DeepPartial } from "typeorm";
import { z } from "zod";
import { movieSchema, ReturnAllMoviesSchema, returnMovieSchema, UpdateMovieSchema } from "../schemas/Movies.schemas";


export type Movie = z.infer<typeof movieSchema>

export type MovieReturn = z.infer<typeof returnMovieSchema>

export type MoviesReturn = z.infer<typeof ReturnAllMoviesSchema>

export type UpdateMovie = DeepPartial<Movie>