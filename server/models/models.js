let mongoose = require('mongoose');

mongoose.model('User',new mongoose.Schema({
	name:{type:String,required:true,minlength:1,maxlength:255},
	animal:{type:String,required:true,minlength:1,maxlength:255},
	breed:{type:String,required:true,minlength:1,maxlength:255},

	
}));