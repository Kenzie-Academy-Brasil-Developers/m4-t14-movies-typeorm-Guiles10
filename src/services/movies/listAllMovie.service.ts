import { Movie } from "../../entities";
import { MoviesAllReturn } from "../../interfaces/interfaceMovies";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";

export const listAllMovieService = async (page: any, perPage: any, order: any, sort: any): Promise<MoviesAllReturn> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const baseURL: string =  'http://localhost:3000/movies'

    if (page <= 0 || Number.isNaN(+page) === true){
        page = 1
    }
    if(perPage <= 0 || perPage > 5 || Number.isNaN(+perPage) === true){
        perPage = 5
    }

    const take: number = Number(perPage)
    const skip: number = Number(page)

    order && order.toLowerCase()
    sort && sort.toLowerCase()

    const order1 = order && sort ? order : 'asc'

    const testSort = sort != 'price' && sort != 'duration' ? 'id' : sort

    const movie: any = await movieRepository.findAndCount({
        order: {
            [testSort]: order1
        },
        take,
        skip: take * ( skip - 1 )
    });

    const data = movie[0];
    
    const count = movie[1]

    const totalPages = Math.ceil(movie[1] / perPage);

    const nextPage = page < totalPages ? `${baseURL}?page=${Number(page) + 1}&perPage=${perPage}` : null;

    const prevPage = page > 1 ? `${baseURL}?page=${Number(page) - 1}&perPage=${perPage}` : null;


    const AllMovies: MoviesAllReturn = {
        nextPage,
        prevPage,
        count,
        data,
    };

    return AllMovies
}