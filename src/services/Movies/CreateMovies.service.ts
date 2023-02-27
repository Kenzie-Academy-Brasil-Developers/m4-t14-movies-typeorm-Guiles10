import { Movie } from "../../entities";
import { MovieReturn } from "../../interfaces/interface.Movies";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { returnMovieSchema } from "../../schemas/movies.schemas";

export const createMovieService = async (Data: Movie): Promise<MovieReturn> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie: Movie = movieRepository.create(Data)

    await movieRepository.save(movie)

    const NewMovie = returnMovieSchema.parse(movie)

    return NewMovie
}