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
    console.log('req.body', req.body)
    Cars.create(req.con, req.body, function(err, rows) {
      if ( err ) {
        throw err
      }
      res.send({data: rows})
    })
  },
}
