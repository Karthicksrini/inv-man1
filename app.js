const express = require("express");
const mongo = require("./mongo");
const brand= require("./routes/brand");
const category= require("./routes/category.js");
const store= require("./routes/store");
const group= require("./routes/group");
const colors=require("./routes/colors");
const size=require("./routes/size");
const product=require("./routes/product");
const user= require("./routes/user");
const authorise = require("./module/auth")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
require("dotenv").config()


var cors =require("cors");
const app= express()


console.log(process.env.TABLE_NAME);
//Mongodb Connect
 mongo.connect();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//parse request body into JSON format
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Common Middleware is called.

app.use((req,res,next)=>{
 console.log("Middleware 1 called!!")
 next();
});


//Routers
app.use("/user",user);
app.use(authorise.AuthorizeUser)
app.use("/brand", brand);
app.use("/category", category);
app.use("/store",store);
app.use("/colors",colors);
app.use("/size",size)
app.use("/group",group)
app.use("/product",product)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


module.exports = app;


                 



