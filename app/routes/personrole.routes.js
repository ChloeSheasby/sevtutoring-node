module.exports = app => {
    const personrole = require("../controllers/personrole.controller.js");
  
    var router = require("express").Router();
  
    // Create a new PersonRole
    router.post("/", personrole.create);
  
    // Retrieve all PersonRole
    router.get("/", personrole.findAll);
  
    // Retrieve a single PersonRole with id
    router.get("/:id", personrole.findOne);
  
    // Update a PersonRole with id
    router.put("/:id", personrole.update);
  
    // Delete a PersonRole with id
    router.delete("/:id", personrole.delete);
  
    // Delete all PersonRole
    router.delete("/", personrole.deleteAll);
  
    app.use('/api/personrole', router);
  };