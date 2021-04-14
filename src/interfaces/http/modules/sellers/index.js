const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../../../../infra/config/upload');
const especifcSellerController = require('./especifcSellerController');
const sellerController = require('./sellerController');

const sellerRouter = Router();
const upload = multer(uploadConfig);

sellerRouter.get('/', sellerController.index);
sellerRouter.post('/', upload.single('image'), sellerController.create);
sellerRouter.delete('/:id', sellerController.delete);
sellerRouter.put('/:id', sellerController.update);

sellerRouter.get('/:id', especifcSellerController.show);
module.exports = sellerRouter;
