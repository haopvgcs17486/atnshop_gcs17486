/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');

/// ***************** 
const uri = "mongodb+srv://db03:MJolOKemr4zdzF3E@shopping.v6trt.mongodb.net/ATN_Company?retryWrites=true&w=majority";


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase =  "ATN_Company"; // "CloudDB";



module.exports = {
    Client : MongoClient,
    Mongosee : mongosee,
    URI : uri,
    DBname : NameDataBase,
};
