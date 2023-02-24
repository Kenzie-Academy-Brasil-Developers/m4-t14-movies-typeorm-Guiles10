 import { z } from 'zod'

export const movieSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(), //nullish() - Junta Nullable e optional
    duration: z.number(),
    price: z.number(),
 })

 export const returnMovieSchema = movieSchema.extend({
    id: z.number(),
    createdeAt: z.date().optional(),
    updatedeAt: z.date().optional(),
    deletedeAt: z.date().nullable().optional(),
 })

 export const ReturnAllMoviesSchema = returnMovieSchema.array()

 export const UpdateMovieSchema = movieSchema.partial()