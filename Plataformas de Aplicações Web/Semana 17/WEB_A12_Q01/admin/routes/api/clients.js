var express = require('express');
var router = express.Router();

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

const requireJWT = require('../../middlewares/requireJWT');

router.get('/', [requireJWT], async (req, res) => {
  const jwt = res.locals.jwt;
  if (!jwt.employee) {
    return res.status(401).json({
      message: 'Não é um funcionário'
    });
  }

  const clients = await knex.table('clients').select(['id', 'name', 'email']);
  res.json({
    clients
  });
});

module.exports = router;