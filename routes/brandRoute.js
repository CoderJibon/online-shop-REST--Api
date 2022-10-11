const express = require('express');
const { getAllBrand, createBrand, brandUpdate, brandRemove } = require('../controllers/brandControllers');



// init router

const brandRouter = express.Router();

// make routes

brandRouter.route('/').get(getAllBrand).post(createBrand);

brandRouter.route('/:id').put(brandUpdate).delete(brandRemove);






// export router

module.exports = brandRouter;