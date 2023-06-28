import { user } from "../routes/auth";



module.exports = async (req, res, next) => {
  if (! req.session || !req.session.logged_as) {
    return res.redirect('/auth/login_form');
  }
  const idAdminLogado = req.session.logged_as;
  res.locals.employee = user;
  next();// continua a requisição que inclui esse middleware

}