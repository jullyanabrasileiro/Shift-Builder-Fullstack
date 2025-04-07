const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Usuário não encontrado');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Senha incorreta');

    res.json({ token: 'JWT_TOKEN_HERE' }); 
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
};

module.exports = { loginUser };
