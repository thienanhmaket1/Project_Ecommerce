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
    } catch (error) {
        return res.status(500).json({
            code: 1,
        })
    }
})

authenRouter.post('/register', async(req, res) => {
    try {
        console.log(req.body)
        const {
            user_username,
            user_password,
            user_fullname,
            user_email,
            user_phone
        } = req.body
        console.log(user_username)
        const arrCells = [
            user_username,
            user_password,
            user_fullname,
            user_email,
            user_phone
        ]
        console.log(arrCells)
        const sql = `
            INSERT INTO ec_users (user_username, user_password, user_fullname, user_email, user_phone)
            VAlUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `
        console.log(sql)
        const result = await db.postgre.runWithPrepare(sql, arrCells).catch((error) => {
            return error
        })
        if (result.rows) {
            const { rows } = result
            return res.status(201).json({
                code: 0,
                data: rows[0],
            })
        }
        if (result.constraint === 'unique_user_username') {
            return res.status(500).json({
                code: 5,
                data: {},
            })
        }
        return res.status(500).json({
            code: 2,
            data: {},
        })
    } catch (error) {
        return res.status(500).json({
            code: 1,
            data: {},
        })
    }
})



module.exports = authenRouter