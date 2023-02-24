import { NextFunction, Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'
    
export const ExistMovieMidd = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const findMovie = await movieRepository.findOne({
        where: {
            id: Number(req.params.id)
        }
    })

    if(!findMovie){
        throw new AppError ('Movie is not Exist', 404)
    }
    
    return next()
}