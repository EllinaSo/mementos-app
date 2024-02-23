import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ email, id: existingUser._id }, process.env.SECRET_JWT, { expiresIn: '1h' });
    res.status(200).json({ result: existingUser, token });
  } catch ({ message }) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, repeatPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exist.' });
    }

    if (password !== repeatPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
    const token = jwt.sign({ email, id: result._id }, process.env.SECRET_JWT, { expiresIn: '1h' });
    res.status(200).json({ result, token });
  } catch ({ message }) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};
