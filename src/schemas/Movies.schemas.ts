import { z } from 'zod'

export const movieSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(),
    duration: z.number().int().positive(),
    price: z.number().int(),
 })

 export const returnMovieSchema = movieSchema.extend({
    id: z.number(),
 })

 export const ReturnAllMoviesSchema = returnMovieSchema.array()

 export const UpdateMovieSchema = movieSchema.partial()

 export const ReturnAllMovie = z.object({
   nextPage: z.string().nullable(),
   prevPage: z.string().nullable(),
   totalCount: z.number(),
   data: returnMovieSchema.array()
 })

