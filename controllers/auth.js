
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  try {

    let user = await User.findOne({email: req.body.email});
    if (user){
    return res.send ("user with given email is existing");
    }
    user = await new User({
      fullname: req.body.fullname,
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
    }).save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user' });
  }
};







module.exports.registerForm = async (req, res) => {
    res.status(200).json({ message: 'Render registration form' });
}

// module.exports.register = async (req, res) => {
//     try {
//         const { email, username, password, name } = req.body;
//         const user = new User({ email, username, name });
//         const registerUser = await User.register(user, password);

//         req.login(registerUser, (err) => {
//             if (err) return next(err);
//             req.flash('success_msg', 'Registrasi berhasil, Anda berhasil login');
//             res.status(200).json({ success: true, message: 'Registrasi berhasil' });
//         });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// }

module.exports.loginForm = (req, res) => {
    res.status(200).json({ message: 'Render login form' });
}

// module.exports.login = (req, res) => {
//     res.status(200).json({ success: true, message: 'Login berhasil' });
// };

module.exports.login = async (req, res) => {
    // Jika autentikasi berhasil, buat token JWT
    const payload = { user_id: req.user._id, username: req.user.username };
    const secretKey = 'motositefindr123'; // Ganti dengan kunci rahasia yang aman
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Tambahkan opsi expiresIn jika diperlukan

    // Kirim token sebagai respons
    res.status(200).json({ success: true, message: 'Login berhasil', token });
}





module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success_msg', 'Anda berhasil logout');
        res.status(200).json({ success: true, message: 'Logout berhasil' });

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
})}


