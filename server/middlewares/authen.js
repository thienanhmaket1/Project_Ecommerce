const db = require('../services/db')

const environment = require('../environments/environment.dev')

const getUser = async (user_id) => {
    const user_query = `
        SELECT *
        FROM tbl_users
        WHERE user_id = '${user_id}'
    `

    const result = await db.postgre.run(user_query).catch(() => null)

    if (result) {
        const { rows } = result
        if (rows.length === 1) {
            return rows[0]
        }

        return null
    }

    return null
}

const authenMiddleware = (req, res, next) => {
    req.user = undefined
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).json({
            err: 'Unauthorized User!',
            code: 7,
        })
    }
}

module.exports = authenMiddleware
