const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController')

// Get all countries
router.get('/', countriesController.get_countries);

// Get country by ID
router.get('/:id', countriesController.get_country);

// Add a new country
router.post('/', countriesController.add_country);

// Update country with given ID
router.put('/:id', countriesController.update_country);

// Delete country with given ID
router.delete('/:id', countriesController.delete_country);


module.exports = router;