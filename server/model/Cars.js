module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM cars", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM cars WHERE id = ${id}`, callback)
  },

  create: function(con, data, callback) {
    console.log("data", data)
    con.query(
      `INSERT INTO cars SET 
      name = '${data.name}', 
      brand = '${data.brand}',
      type = '${data.type}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE cars SET 
      name = '${data.name}',
      brand = '${data.brand}',
      type = '${data.type}'
      WHERE id = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM cars WHERE id = ${id}`, callback)
  },

  create_table: function(con, id, callback) {
    con.query("CREATE TABLE `cars` (`id` INT NOT NULL AUTO_INCREMENT,`name` TEXT(255) DEFAULT NULL, `type` ENUM('car', 'truck') DEFAULT NULL,`brand` TEXT(255) DEFAULT NULL,`year` INT(8) DEFAULT NULL,`license` TEXT(15),PRIMARY KEY (`id`));")
  }
}
