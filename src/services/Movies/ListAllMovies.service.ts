import { Movie } from "../../entities";
import { MoviesAllReturn } from "../../interfaces/interface.Movies";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { ReturnAllMovie } from "../../schemas/movies.schemas";

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

    if(order !== 'desc') order = 'asc'

    if(sort != 'price' && sort != 'duration') sort = 'id'

    let orderBy: string;
    switch (sort) {
      case 'price':
        orderBy = 'price';
        break;
      case 'duration':
        orderBy = 'duration';
        break;
      default:
        orderBy = 'id';
    }

    const movie: Array<Movie> = await movieRepository.find({
        take,
        skip: take * ( skip - 1 ),
        order: {
            [orderBy]: order
        }
    })

    const count = await movieRepository.count();

    const totalPages = Math.ceil(count / perPage);

    const nextPage = page < totalPages ? `${baseURL}?page=${Number(page) + 1}&perPage=${perPage}` : null;

    const prevPage = page > 1 ? `${baseURL}?page=${Number(page) - 1}&perPage=${perPage}` : null;

    const data = movie;

    const AllMovies: MoviesAllReturn = ReturnAllMovie.parse({
        nextPage,
        prevPage,
        count,
        data,
    });

    return AllMovies
}