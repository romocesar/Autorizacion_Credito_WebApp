const router = require('express').Router()
const clientController = require('../../controllers/clientsController')

// Matches with "/api/user"
router.route('/')
// GET "/api/user"
  .get(clientController.getAllClients) // Gets all the users
// POST "/api/user" Example Request: { "vals": ["test_user", "111111", 1] }
  .post(clientController.createNewUser)// create a new user
//= ======================================================

// Matches with "/api/user/:id"
router.route('/:word')
// GET "/api/user/:id"
 // .get(clientController.getClientBySearch)// get user data by ID
  // GET "/api/user/:id"
  .get(clientController.getClientById)// get user data by ID
// PUT "/api/user/:id" Example Request: { "vals": ["test_user", "111111", 1] }
  .put(clientController.updateUserById)// update a user by ID
// DELETE "/api/user/:id"
  .delete(clientController.deleteUserById)// delete a user by ID

module.exports = router
