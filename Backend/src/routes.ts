import {Router} from 'express'
import { CreateUserController } from './controllers/users/CreateUserControllers'
import { AuthUserController } from './controllers/users/AuthUserController'
import { DetailUserController} from './controllers/users/DetailUserController'

import {isAuthenticated} from './middlewares/isAuthenticated'

const router = Router()

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)



export{ router}
