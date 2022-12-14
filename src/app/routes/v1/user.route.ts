import express, { Router } from 'express';

import userController from '@controller/v1/user.controller';
import authMiddleware from 'app/middleware/auth.middleware';

const router: Router = express.Router();

/** Route - Handles Google OAuth 2 Login */
router.get('/', authMiddleware.authenticateRequest, userController.getUserInfo);

router.get(
    '/city-transport/:cityId/:modeOfTransport',
    authMiddleware.authenticateRequest,
    userController.getCityTransportInfo,
);

export default router;
