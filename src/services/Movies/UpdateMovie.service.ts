import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { MovieReturn, UpdateMovie } from "../../interfaces/interface.Movies";
import { returnMovieSchema } from "../../schemas/Movies.schemas";

export const UpdateMovieService = async (Data: UpdateMovie, Id: number): Promise<MovieReturn> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const oldMovieData = await movieRepository.findOneBy({
        id: Id
    })

    const movie: Movie = movieRepository.create({
        ...oldMovieData,
        ...Data
    })

    await movieRepository.save(movie)

    const updateMovie = returnMovieSchema.parse(movie)

    return updateMovie

}