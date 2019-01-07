var db = require("../models");


module.exports = function(app) {
  app.get("/", function(req,res){
      db.Burger.findAll().then(
        function(data){
          var hbsobject = {
            burgers: data
          };
        res.render("index", hbsobject);
      })        
  }); 

  app.post("/api/burgers", function(req, res) {
      db.Burger.create(req.body).then(function(result) {
        res.json({ id: result.insertId });
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id)
    db.Burger.update(
      {devoured: 1},
      {where: {id: req.params.id}})
      .then(function(result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy(
    {where: {id: req.params.id}})
    .then(function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    
  });
};

