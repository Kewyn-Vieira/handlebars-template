import express, { Request, Response } from 'express'
import  functions from '../../functions/index'

var router = express.Router()

router.get('/index.css', (req: Request, res: Response) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

export default router