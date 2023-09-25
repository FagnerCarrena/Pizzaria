import {Router} from 'express'
import { CreateUserController } from './controllers/users/CreateUserControllers'
import { AuthUserController } from './controllers/users/AuthUserController'
import { DetailUserController} from './controllers/users/DetailUserController'

import {isAuthenticated} from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/listCategoryController'

const router = Router()

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//rotas category
router.post("/category",isAuthenticated, new CreateCategoryController().handle ) 
router.get("/category",isAuthenticated, new ListCategoryController().handle )



export{ router}
