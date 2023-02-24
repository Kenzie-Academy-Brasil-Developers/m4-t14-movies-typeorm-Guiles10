import { Router } from 'express'
import { CreateMovieController, DeleteMovieController, ListAllMovieController, UpdateMovieController } from '../controllers/movies.Controllers'
import { ExistMovieMidd } from '../middlewares/movieExist.Midd'
import { NameExistMidd } from '../middlewares/nameExist.Midd'
import { validateDataMidd } from '../middlewares/validateData.Midd'
import { movieSchema, UpdateMovieSchema } from '../schemas/Movies.schemas'

export const movieRoutes: Router = Router()

movieRoutes.post('', validateDataMidd(movieSchema), NameExistMidd, CreateMovieController)
movieRoutes.get('', ListAllMovieController)
movieRoutes.delete ('/:id', ExistMovieMidd, DeleteMovieController)
movieRoutes.patch ('/:id', validateDataMidd(UpdateMovieSchema), ExistMovieMidd, NameExistMidd, UpdateMovieController)
