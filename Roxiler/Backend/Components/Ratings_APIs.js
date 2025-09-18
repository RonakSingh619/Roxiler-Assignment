import { db } from '../Components/DataBase/MyDB.js'


export const getRatings = (req, res) => {

    const q = ` SELECT * FROM ratings`
    db.query(q, (err, data) => {
        if (err) {
            return res.json([{ Error: err }])
        }
        else {
            return res.json(data)
        }
    })

}

export const AddRating = (req, res) => {

    const q = `
                INSERT INTO  ratings(user_fk, store_fk, rating )
                values(
                    ?,?,?
                    )
                `
    const values = [
        req.body.userId,
        req.body.storeId,
        req.body.rating,
    ]
    console.log("ratings values: ", values);
    db.query(q, values, (err, data) => {
        if (err) {
            return res.json({ Error: err , valid: false})
        }
        else {
            return res.json({ data: data, valid: true })
        }
    })
}
