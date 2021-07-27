const Cars = require("../model/Cars")

module.exports = {
  index: function(req, res) {
    Cars.get(req.con, function(err, rows) {
      if ( err ) {
        throw err
      }
      res.send({data: rows})
    })
  },
  create: function(req, res) {
    Cars.create(req.con, req.body, function(err, rows) {
      if ( err ) {
        throw err
      }
      res.send({data: rows})
    })
  },
  update: function(req, res) {
    Cars.update(req.con, req.body, req.query.id, function(err, rows) {
      if ( err ) {
        throw err
      }
      res.send({data: rows})
    })
  },
  destroy: function(req, res) {
    Cars.destroy(req.con, req.query.id, function(err, rows) {
      if ( err ) {
        throw err
      }
      res.send({data: rows})
    })
  }
}
