const controller = require("../controllers/tasklist.controller");
module.exports = function(app){
app.get(
    "/api/tasklists",
    controller.findAll
  );

    // Create a new Tutorial
    app.post("/api/tasklists", controller.create);

    // Retrieve all Tutorials
    app.get("/api/tasklists", controller.findAll);

  
    // Retrieve a single Tutorial with id
    app.get("/api/tasklists/:id", controller.findOne);
  
    // Update a Tutorial with id
    app.put("/api/tasklists/:id", controller.update);
  
    // Delete a Tutorial with id
    app.delete("/api/tasklists/:id", controller.delete);
  
    // Create a new Tutorial
    app.delete("/api/tasklists", controller.deleteAll);
  
    
};