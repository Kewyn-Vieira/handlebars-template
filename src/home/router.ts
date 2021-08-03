import express, { Request, Response } from 'express'
import functions from '../functions'

var router = express.Router()

router.get('/', (req: Request, res: Response) =>
{
    // Without template
    res.status(200).send("<p style='font-family: monospace'>Choose a template language and merge it with your branch to display your content.<p>")

    // With template
    
})

router.get('/index.css', (req: Request, res: Response) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

router.get('/res/logo.png', (req: Request, res: Response) =>
{
    functions.sendFile(res, `${__dirname}/res/logo.png`)
})

export default router