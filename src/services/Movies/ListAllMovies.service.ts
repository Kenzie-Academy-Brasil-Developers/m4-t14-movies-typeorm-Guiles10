import { Movie } from "../../entities";
import { MoviesReturn } from "../../interfaces/interface.Movies";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { ReturnAllMoviesSchema } from "../../schemas/Movies.schemas";

export const ListAllMovieService = async (page: any, perPage: any): Promise<MoviesReturn> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const take: number = Number(perPage) || 5
    const skip: number = Number(page) || 1

    const movie: Array<Movie> = await movieRepository.find({
        take,
        skip: take * ( skip - 1 )
    })

    const AllMovie = ReturnAllMoviesSchema.parse(movie)

    return AllMovie
}