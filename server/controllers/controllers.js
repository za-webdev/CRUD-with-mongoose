let User = require("mongoose").model("User");

class UserController{
	all(req,res){
		User.find({},(err,users)=>{
			if(err){
				res.render("create");
			}else{
				res.render("result",{users:users});
			}
		})
	}

	create(req,res){
		let user = new User(req.body);
		console.log(req.body)

		user.save((err)=>{
			if(err){
				console.log(err);
				res.render("create",{errors:user.errors});
			}else{
				res.redirect("/");
			}
		})
	}


	update(req,res){
		User.findOne({_id:req.body._id},(err,user)=>{
			user.animal=req.body.animal;
			user.breed=req.body.breed;
			user.name=req.body.name;

			user.save((err)=>{
				if(err){
					res.redirect("/users/"+user._id);
				}else{
					res.redirect("/");
				}
			});
		})
	}

	findById(req,res){
		User.findOne({_id:req.params.id},(err,user)=>{
			if(err){
				res.redirect("/");
			}else{
				res.render("show",{user:user});
			}
		});
	}

	destroy(req,res){
		User.remove({_id:req.params.id},(err)=>{
			res.redirect("/");
		});
	}
}

module.exports = new UserController();