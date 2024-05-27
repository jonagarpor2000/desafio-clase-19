import { Router, json } from 'express'
import productsRouter from './api/products.router.js'
import productsview from './products.view.router.js'
import cartsRouter from './api/carts.router.js'
import { sessionsRouter } from './api/sessions.router.js'
const router = Router()



router.use('/api/products',productsRouter)
router.use('/products',productsview)
router.use('/api/carts',cartsRouter)
router.use('/api/sessions', sessionsRouter)

export default router