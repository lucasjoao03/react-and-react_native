var bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
const user = {
    email: 'teste@gmail.com', 
    password: '123',
    id: 10000
}
export { user }

// exibe o formulário de login
router.get('/login_form', async (req, res) => {
  // renderiza formulário EJS (view)
  res.render('auth/login_form', { error: req.query.error });
});

// tenta logar o employee e redirecionar para a raiz do sistema
router.post('/sign_in', async (req, res) => {
  // busca employee no banco com esse email




  if (user.email != req.body.email) {
    return res.redirect('/auth/login_form?error=1');
  }
  if ( bcrypt.compareSync(req.body.password, user.password) ) {
    req.session.logged_as = user.id;
    return res.redirect('/');
  } else {
    req.session = null;
    return res.redirect('/auth/login_form?error=1');
  }
});

// desloga o employee e redireciona para o form de login
router.get('/sign_out', async (req, res) => {
  req.session = null;
  return res.redirect('/auth/login_form');

});

module.exports = router;