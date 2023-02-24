import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";

export const DeleteMovieService = async (Id: number): Promise<void> => {
   
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const existMovie = await movieRepository.findOne({
        where: {
            id: Id
        }
    })

    await movieRepository.remove(existMovie!)
}