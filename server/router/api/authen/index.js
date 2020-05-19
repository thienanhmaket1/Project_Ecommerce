const express = require('express')
const db = require('../../../services/db')

const authenRouter = express.Router()

authenRouter.post('/login', async(req, res) => {
    try {
        const user_username = req.body.user_username
        const query = `
            SELECT *
            FROM ec_users
            WHERE user_username = '${user_username}'
        `
        console.log(query)
        const result = await db.postgre.run(query).catch((error) => {
                return null
        })
        if (result) {
            const { rows } = result
            console.log(rows.length)
                if (rows.length === 1) {
                    return res.status(200).json({
                        code: 0,
                        data: {
                            user: rows[0] || {},
                        },
                    })
                }
                
                
                return res.status(200).json({
                    code: 1,
                    data: {
                        user: rows[0] || {},
                    },
                })
                
            }
            return res.status(401).json({
                code: 1,
            })
        }
     
        catch (error) {
        return res.status(500).json({
            code: 1,
        })
    }
})


module.exports = authenRouter