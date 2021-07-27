import { Response } from "express"
import fs from 'fs'

let sendFile = (res: Response, path: string) =>
{
    fs.readFile(path, (err: Error, data: any) =>
    {
        if(err)
        {
            console.error(err)
            return res.status(500).end()
        }
        res.status(200).end(data)
    })
}

export default sendFile