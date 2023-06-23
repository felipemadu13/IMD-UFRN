const knexConfig = require("../knexfile");
const knex = require('knex')(knexConfig);

module.exports = async (req, res, next) => {

  if (!req.session || !req.session.logged_as) {
    return res.redirect('/auth/login_form');
  }

  const idAdminLogado = req.session.logged_as;
  const employee = await knex.table('employees').where({ id: idAdminLogado }).first();
  
  res.locals.employee = employee;
  next();

}