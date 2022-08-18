// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require("../../models");
const url = require("url");
const env = require("dotenv").config();
const bcrypt = require("bcryptjs");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const { name, email, password, college } = body;
    console.log(
      `name: ${name}, email: ${email}, password: ${password}, college: ${college}`
    );
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await db.User.findOne({ email });
      if (user) {
        console.log("User already exists");
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = await db.User.create({
        password: hashedPassword,
        name,
        email,
        college,
      });
      return res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something went wrong" + error,
      });
    }
  }
};

export default handler;
