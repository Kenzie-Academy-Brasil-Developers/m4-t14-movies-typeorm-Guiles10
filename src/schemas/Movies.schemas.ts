import { z } from 'zod'

export const movieSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(), //nullish() - Junta Nullable e optional
    duration: z.number(),
    price: z.number(),
 })

 export const returnMovieSchema = movieSchema.extend({
    id: z.number(),
 })

 export const ReturnAllMoviesSchema = returnMovieSchema.array()

 export const UpdateMovieSchema = movieSchema.partial()

 export const ReturnAllMovie = z.object({
   nextPage: z.string().nullable(),
   prevPage: z.string().nullable(),
   data: returnMovieSchema.array()
 })