const express=require('express')
const mysql=require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
   //  database:'nested_categories',
    database:'todo',
    
  });
  
  con.connect(function(err) {
     if (err) throw err;
     console.log("Connected!!");
   
  });
  module.exports=con;