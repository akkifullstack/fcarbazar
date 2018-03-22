let mongoose = require('mongoose')


let testdSchema = new mongoose.Schema({
	client_name:{
		type:String,
		required:true
	},
	phone_no:{
		type:Number,
		required:true
	},
	{timestamps:true},
	email_id:{
		type:String,
		required:true
	},
	client_address:{
		type:String,
		required:true
	},
	payment_method:{
		type:String
	},
	payment_status:{
		type:String,
		required:true
	},
	assigned_emp:[String]
})

let saleSchema = new mongoose.Schema({
	car_name:{
		type:String,
		required:true
	},
	sell_date:{
		type:Date,
		default:Date.now()
		required:true
	},
	loan:{
		type:String,
		required:true
	}
})

let featSchema = new mongoose.Schema({
	exterior_color:{
		type:String,
		required:true	
	},
	fuel_type:{
		type:String,
		required:true
	},
	make:{
		type:String,
		required:true
	},
	body_type:{
		type:String,
		required:true
	},
	tank_capacity:{
		type:Number,
		required:true
	},
	model_year{
		type:Date,
		required:true
	},
	interior_color:{
		type:String,
		required:true
	},
	transmission_type:{
		type:String,
		required:true
	},
	sitting_capacity:{
		type:String,
		required:true
	}
}) 


let carSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	model:{
		type:String,
		required:true
	},
	ex_showroom_price:{
		type:String,
		required:true
	},
	on_road_price:{
		type:String,
		required:true
	},
	features:[featSchema],
	testdrive:[testdSchema]
})


let empSchema = new mongoose.Schema({
	e_name:{
		type:String,
		required:true
	},
	e_res_add:{
		type:String,
		required:true
	},
	e_adhar_no:{
		type:Number,
		required:true
	},
	e_pan_no:{
		type:Number,
		required:true
	},
	sales:[saleSchema]
})


let dealerSchema = new mongoose.Schema({
	d_name:{
		type:String,
		required:true
	},
	d_sroom_add:{
		type:String,
		required:true
	},
	d_adhar_no:{
		type:Number,
		required:true
	},
	d_pan_no:{
		type:Number,
		required:true
	},
	d_certificate:{
		type:String
	},
	employee:[empSchema],
	cars:[carSchema]
})


let companySchema = new mongoose.Schema({
	c_name : {
		type:String,
		required:true
	},
	c_reg_Date:{
		type:Date,
		required:true
	},
	c_offical_add : {
		type:String,
		required:true
	},
	c_contact:{
		type:Number,
		required:true
	},
	c_pan :{
		type:Number,
		required:true
	}
	dealers:[dealerSchema]
})

mongoose.model('company',companySchema);