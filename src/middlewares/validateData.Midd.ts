import { NextFunction, Request, Response } from 'express'
import { ZodTypeAny } from 'zod'
import { AppError } from '../errors'

export const validateDataMidd = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {

    const validatedDate = schema.parse(req.body)

    req.body = validatedDate

    const Validatedkey: Array<string> = Object.keys(validatedDate)
    if(!Validatedkey.length){
        throw new AppError ('Movie not found', 404)
    }

    return next()
}