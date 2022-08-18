// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const db = require("../../models");
const bcrypt = require("bcryptjs");
const JWT_SECRET_KEY = "cgfVGVGVGSS";
const jwt = require("jsonwebtoken");

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const { email, password } = body;
    try {
      const user = await db.User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({
          message: "Invalid User Credentials",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({
          message: "Invalid User Credentials",
        });
      }
      const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY);
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something went wrong" + error,
      });
    }
  }
};

// const  handler = async (req, res) => {
//     if (req.method == "POST"){
//         const user_body = JSON.parse(req.body)
//         console.log(user_body)

//         var sql = `SELECT * FROM ${'users'} WHERE ${'email'} = '${user_body.email}'`;
//         await conn.query(sql, async function(err, result){
//             console.log(sql,err,result)
//             // conn.close();
//             if(err){
//                 res.status(404).json({ "error": "Some Internal Server Error" })
//                 throw err;
//             }
//             else{
//                 await console.log("Result"+result)
//                 if (isEmpty(result)){
//                     console.log("Got it1")
//                     res.status(200).json({ error: "Invalid credentials" })
//                 }
//                 else{
//                     const checkPass = await bcrypt.compare(user_body.password, result[0].password)
//                     if(!checkPass){
//                         console.log("Pass wrong")
//                         res.status(400).json({ error: "Invalid credentials" })
//                     }
//                     else{
//                         console.log("Pass ok")
//                         const data = {
//                             user: {
//                                 id: result[0].id
//                             }
//                         }
//                         const authToken = jwt.sign(data, JWT_SECRET_KEY)
//                         // console.log(typeof(authToken))

//                         // res.status(200).json({ authToken })
//                         res.status(200).json({ authToken })
//                     }
//                 }
//             }
//         })
//     }
//     else{
//         res.status(404).send("page not found 404")
//     }
// }
export default handler;
