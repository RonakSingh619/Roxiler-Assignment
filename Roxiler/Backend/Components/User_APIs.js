import { db } from '../Components/DataBase/MyDB.js'


export const getUsers = (req, res) => {

    const q = ` SELECT * FROM user`
    db.query(q, (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })

}

export const AddUser = (req, res) => {

    const q = `
                INSERT INTO  user(name, email, password, role, address )
                values(
                    ?,?,?,?,?
                    )
                `
    const values = [
        req.body.name,
        req.body.email,
        req.body.pass,
        req.body.role,
        req.body.address,
    ]
    console.log("addUser values: ", values);
    // db.query(q, values, (err, data) => {
    //     if (err) {
    //         return res.json([{ valid:false, Error: err }])
    //     }
    //     else {
    //         return res.json({valid: true, data: data})
    //     }
    // })
}