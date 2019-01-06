var db = require("../models");


module.exports = function(app) {
  app.get("/", function(req,res){
    
      db.Burger.findAll().then(
        function(hbsobject){
        res.render("index", hbsobject);
      })        
  }); 

  // app.post("/api/burgers", function(req, res) {
  //     db.burger.create(req.body).then(function(result) {
  //       res.json({ id: result.insertId });
  //     });
  // });

  // app.put("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   console.log("condition", condition);

  //   burger.updateOne(
  //     condition, function(result) {
  //     if (result.changedRows == 0) {
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });

  // app.delete("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   console.log("condition", condition);

  //   burger.delete(condition, function(result) {
  //     if (result.affectedRows == 0) {
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });

}

