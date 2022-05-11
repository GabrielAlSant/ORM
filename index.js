var express = require("express");
var app = express();
var { usuario } = require("./models")
var { empresa } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios/:id", async function (req, res){
 const resultado =  await usuario.findOne({where : {id:req.params.id}});
  res.json(resultado)
  
});

app.get("/usuarios", async function (req, res){
 const resultado =  await usuario.findAll();
  res.json(resultado)
  
});

app.post("/usuarios", function (req, res){
 var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", function (req, res){
 var resultado =  usuario.update(req.body, {where : {id:req.params.id}});
 res.json(resultado) 
});

app.delete("/usuarios/:id", async function (req, res){
 var resultado =  await usuario.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});


/*Empresas*/


app.get("/empresas/:id", async function (req, res){
 const resultado =  await empresa.findOne({where : {id:req.params.id}});
  res.json(resultado)
  
});

app.get("/empresas", async function (req, res){
 const resultado =  await empresa.findAll();
  res.json(resultado)
  
});

app.post("/empresas", function (req, res){
 var resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", function (req, res){
 var resultado =  empresa.update(req.body, {where : {id:req.params.id}});
 res.json(resultado) 
});

app.delete("/empresas/:id", async function (req, res){
 var resultado =  await empresa.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});



app.listen(3000, function(){
  console.log("O servidor esta em killing spree B)")
});

