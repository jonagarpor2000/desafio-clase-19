import {Router, query} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { UsersManagerMongo } from '../dao/usrMg_db.js'

const userService = new UsersManagerMongo()
const router = Router()

router.get('/',async(req,res)=>{
    let {numPage,limit,query,sort} = req.query
    console.log(`Tengo pag: ${numPage} y ${limit}`)
    try {
        let prods = await fetch(`http://localhost:8080/api/products?numPage=${numPage}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {return data.payload})
        let userbymail = await userService.getUserBy({email: req.session.user.email})
        console.log(userbymail)
        const {first_name,last_name,role} = userbymail
        res.render('products',{
            user: {first_name,last_name,role},
            products: prods
        })
        
    } catch (error) {
        console.log(error.message)
    }
    
})

export default router