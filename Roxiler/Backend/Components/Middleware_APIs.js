import { db } from '../Components/DataBase/MyDB.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

const skey = "chawzry619@"

// const func = async () => {
//   // const hash = await bcrypt.hash("abhay", 10)
//   // const hash = "$2b$10$EKteegymkwi8.1yX/2zLWupg6vl7KOCv1KEEGX0HSFysMKBP5xIDa"
//   // const hash = "$2b$10$SRLmCYx5kgkv1BCpVbH3N.DuHBiBIzpfHd1qOL6bDezByDqxvYgGu"
//   const hash = "$2b$10$zfMjCqLfIO7kVVCLsGPyGOxEroOfFq2ItJd/SejgYvRgeGDGLooZa"

//   console.log(hash);
//   console.log(await bcrypt.compare("abhay",hash));
// }
// func()


export const login = async (req, res) => {
  const { un, pass } = req.body;
  // pass = await bcrypt.compare(pass,hash)
  const q1 = `SELECT id, password, role FROM user WHERE email=?`;
  // console.log(req.body);

  db.query(q1, [ un ], async (err, data) => {

    if (err) return res.json({ valid: false, msg: "DB error", err });

    if (data.length === 0) {
      return res.json({ valid: false, msg: "signup required" });
    }

    const user = data[0];
    // console.log(data[0]);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) return res.json({ valid: false, msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.login_id }, skey, { expiresIn: "1h" });

    res.cookie("userToken", token);

    return res.json({ valid: true, msg: "Logged in successfully!", userId: data[0].id, role: data[0].role });
  });

};

export const authenticate = (req, res) => {

    const { token } = req.body
    const jwtObj = jwt.verify(token, skey)
    // console.log("jwt.verify(token, skey): ", jwt.verify(token, skey));
    const jwt_ID = jwtObj.id
    const jwt_Pass = jwtObj.pass
    // console.log("-----------------------------Authorizing------------------------------------");
    console.log(req.body);
    const query = `
                    SELECT login_id
                    FROM users 
                    WHERE active_inactive='yes' AND login_id=? AND password=? AND token=?
                `
    const values = [
        jwt_ID,
        jwt_Pass,
        token,
    ]
    db.query(query, values, (err, data) => {
        if (err) {
            // console.log("Error in storing token: ", err);
            // return res.json([{ valid: false, msg: "DB error in token making", Error: err }])
            return res.json({ valid: false, msg: "Illegal user!!" })
        }
        else {
            // return res.json([{ valid: true, msg: "Logged in successfully!", Data: data }])
            return res.json({ valid: true, msg: "User is authentic" })
        }
    })
}

export const signup = async (req, res) => {
  
  const q = `
              INSERT INTO  user(name, email, password, role, address )
              values(
                  ?,?,?,?,?
                  )
              `

  const pass = req.body.pass
  const hashPass = await bcrypt.hash(pass, 10)
  // console.log("hashPass: ", hashPass);
  
  const values = [
      req.body.name,
      req.body.email,
      hashPass,
      req.body.role,
      req.body.address,
  ]
  console.log("signup values: ", values);
  db.query(q, values, (err, data) => {
      if (err) {
          return res.json([{ valid:false, Error: err }])
      }
      else {
          return res.json({valid: true, data: data})
      }
  })
}


export const forgotPass = async (req, res) => {
  
  const q = `
                UPDATE user
                SET password = ?
                WHERE email=?;
              `

  const pass = req.body.pass
  const hashPass = await bcrypt.hash(pass, 10)
  // console.log("hashPass: ", hashPass);
  
  const values = [
      hashPass,
      req.body.email,
  ]
  console.log("fp values: ", values);
  db.query(q, values, (err, data) => {
      if (err) {
          return res.json([{ valid:false, Error: err, msg: "Email not found" }])
      }
      else {
          return res.json({valid: true, data: data, msg: ""})
      }
  })
}