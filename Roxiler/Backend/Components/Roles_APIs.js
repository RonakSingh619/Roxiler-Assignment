import { db } from '../Components/DataBase/MyDB.js'


export const getRoles = (req, res) => {

    const q = ` SELECT * FROM roles`
    db.query(q, (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })

}

export const AddRole = (req, res) => {

    const q = `
                INSERT INTO  roles( role )
                values(
                    ?,?,?,?,?
                    )
                `
    const values = [
        req.body.name,
        req.body.initials,
        req.body.icon,
        req.body.address,
        req.body.GSTIN,
    ]
    console.log("Brands values: ", values);
    db.query(q, values, (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })
}