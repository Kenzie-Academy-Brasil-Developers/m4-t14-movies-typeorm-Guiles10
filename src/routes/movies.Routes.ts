import { Router } from 'express'
import { createMovieController, deleteMovieController, listAllMovieController, updateMovieController } from '../controllers/movies.Controllers'
import { existMovieMidd } from '../middlewares/movieExist.Midd'
import { nameExistMidd } from '../middlewares/nameExist.Midd'
import { validateDataMidd } from '../middlewares/validateData.Midd'
import { movieSchema, UpdateMovieSchema } from '../schemas/movies.schemas'

export const movieRoutes: Router = Router()

movieRoutes.post('', validateDataMidd(movieSchema), nameExistMidd, createMovieController)
movieRoutes.get('', listAllMovieController)
movieRoutes.delete ('/:id', existMovieMidd, deleteMovieController)
movieRoutes.patch ('/:id', validateDataMidd(UpdateMovieSchema), existMovieMidd, nameExistMidd, updateMovieController)
