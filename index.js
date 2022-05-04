var express = require("express");
var app = express();
var { usuario } = require("./models")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/:id", async function (req, res){
 const resultado =  await usuario.findOne({where : {id:req.params.id}});
  res.json(resultado)
  
});

app.get("/", async function (req, res){
 const resultado =  await usuario.findAll();
  res.json(resultado)
  
});

app.post("/", function (req, res){
 var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", function (req, res){
 var resultado =  usuario.update(req.body, {where : {id:req.params.id}});
 res.json(resultado) 
});

app.delete("/:id", async function (req, res){
 var resultado =  await usuario.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});


app.listen(3000, function(){
  console.log("O servidor esta em killing spree B)")
});

