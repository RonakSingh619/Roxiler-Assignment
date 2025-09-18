import express from 'express'
import cors from 'cors'
import { AddUser, getUsers } from './Components/User_APIs.js'
import { AddRole, getRoles } from './Components/Roles_APIs.js'
import { AddRating, getRatings, } from './Components/Ratings_APIs.js'
import { getStores, AddStore, getStoresJoinedInfo } from './Components/Store_APIs.js'
import { authenticate, forgotPass, login, signup } from './Components/Middleware_APIs.js'
import cookieParser from 'cookie-parser'



// Main server setup
const app = express()
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}))
app.use(express.json())
app.use(cookieParser())



// ############################ APIs ############################

// test
// app.get( '/', (req, res) => {

//     const q = "SELECT * FROM roles"

//     db.query(q, (err, data) => {
//         if(err){
//             return res.json({ Error: `Error: ${err}` })
//         }
//         return res.json(data)
//     })

// } )

//------------------ Middleware APIs ------------------
app.post('/api/login', login);
app.post('/api/signup', signup);
app.post('/api/forgotPass', forgotPass);
app.post('/api/authenticate', authenticate);

//------------------ USER APIs ------------------
app.post('/api/getUsers', getUsers);
app.post('/api/addUser', AddUser);

//------------------ RATINGS APIs ------------------
app.post('/api/getRatings', getRatings);
app.post('/api/addRating', AddRating);

//------------------ STORE APIs ------------------
app.post('/api/getStores', getStores);
app.post('/api/getStoresJoinedInfo', getStoresJoinedInfo);
app.post('/api/addStore', AddStore);

//------------------ ROLES APIs ------------------
app.post('/api/getRoles', getRoles);
app.post('/api/addRole', AddRole);









app.listen( 3030, () => {
    console.log("Server ON 🟢")
})