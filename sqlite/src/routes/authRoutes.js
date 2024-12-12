import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const { hashSync } = bcrypt;

const router = express.Router();

// register a new user endpoint /auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  // encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8);
  //   console.log(hashedPassword);

  // * save new user and hashed password to the db
  try {
    const insertUser = db.prepare(`INSERT INTO users(username, password)
        VALUES(?, ?)`);
    const result = insertUser.run(username, hashedPassword);

    // now that we have a user I want to add their first todo for them
    const defaultTodo = `Hello :) Add your first Todo!`;
    const insertTodo = db.prepare(`INSERT INTO todos(user_id, task)
        VALUES (?, ?)`);
    insertTodo.run(result.lastInsertRowid, defaultTodo);

    // create a token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(503);
  }
});

router.post("/login", (res, req) => {});

export default router;
