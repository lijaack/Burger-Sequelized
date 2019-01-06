// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burgers", function(res){
//             cb(res);
//         });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne("burgers", cols, vals, function(res){
//             cb(res);
//         });
//     },
//     updateOne:function(id, cb) {
//         orm.updateOne("burgers", id, function(res){
//             cb(res);
//         });
//     },
//     delete:function(id, cb) {
//         orm.delete("burgers", id, function(res){
//             cb(res);
//         });
//     }
// };

// module.exports = burger;

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      name: {
        type: DataTypes.STRING,
        validate: {len: [1]}
      },
      devoured: {
        type:DataTypes.INTEGER,
        default: 0
      }
    }
    );
    return Burger; 
};
  