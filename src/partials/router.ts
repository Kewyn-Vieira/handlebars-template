import express from 'express'

var router = express.Router()

import header from './header/router'
import footer from './footer/router'

router.use('/header', header)
router.use('/footer', footer)

export default router