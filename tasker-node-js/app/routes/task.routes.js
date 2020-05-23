const controller = require("../controllers/task.controller");
module.exports = function(app){
app.get(
    "/api/tasks",
    controller.findAll
  );

    // Create a new Tutorial
    app.post("/api/tasks", controller.create);

    // Retrieve all Tutorials
    app.get("/api/tasks", controller.findAll);

  
    // Retrieve a single Tutorial with id
    app.get("/api/tasks/:id", controller.findOne);
  
    // Update a Tutorial with id
    app.put("/api/tasks/:id", controller.update);
  
    // Delete a Tutorial with id
    app.delete("/api/tasks/:id", controller.delete);
  
    // Create a new Tutorial
    app.delete("/api/tasks", controller.deleteAll);
  
    
};