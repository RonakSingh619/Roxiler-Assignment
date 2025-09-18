import { db } from '../Components/DataBase/MyDB.js'


export const getStores = (req, res) => {

    const q = ` SELECT * FROM store`
    db.query(q, (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })

}
export const getStoresJoinedInfo = (req, res) => {

    const q = `
        SELECT 
        s.id AS id,
        s.name AS name,
        s.email AS email,
        s.address AS address,
        AVG(r.rating) AS avg_rating,
        ur.rating AS rating
    FROM store s
    LEFT JOIN ratings r 
        ON s.id = r.store_fk
    LEFT JOIN ratings ur 
        ON s.id = ur.store_fk AND ur.user_fk  = ?
    GROUP BY 
        s.id, s.name, s.email, s.address, ur.rating;

    `
    console.log("uid: ", req.body.uid)
    db.query(q, [req.body.uid], (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })

}

export const AddStore = (req, res) => {
// name	address	email	
    const q = `
                INSERT INTO  store(name, address, email, owner  )
                values(
                    ?,?,?,?
                    )
                `
    const values = [
        req.body.name,
        req.body.address,
        req.body.email,
        req.body.owner,
    ]
    console.log("AddStore values: ", values);
    db.query(q, values, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        else {
            return res.json({ valid: true, data: data })
        }
    })
}