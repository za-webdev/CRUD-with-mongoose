let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/",UserController.all);
	app.get("/take_me",function(req,res){res.render ("create")});
	app.get("/users/:id",UserController.findById);
	app.post("/users/:id/destroy",UserController.destroy);
	app.get("/edit/:id",function(req,res){res.render("edit")});
	app.post("/users/:id/update",UserController.update);	
	app.post("/users/new",UserController.create);
}
