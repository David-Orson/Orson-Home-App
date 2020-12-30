const { admin, db } = require("../utility/admin");

const firebaseConfig = require("../utility/firebaseConfig");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const {
  validateSignupData,
  validateLoginData,
} = require("../utility/validators");

const { database } = require("firebase-admin");

exports.signup = async (req, res) => {
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      handle: req.body.handle,
    };

    const data = await firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password);

    return res.status(201).json({ message: `user ${data.uid} signed up successfully` });

  } catch (err) {
    console.error(err);
    if (err.code === "auth/email-already-in-use") {
      return res.status(400).json({ email: "Email is already in use "});
    } else {
      return res.status(500).json({ general: "Something went wrong, please try again" });
    }
  }
}