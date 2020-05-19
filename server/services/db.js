const pg = require('pg')
// pg setting type parsing
const { types } = pg
const timestampOID = 1114
const timestamptzOID = 1184
const dateOID = 1082
types.setTypeParser(timestampOID, (v) => v)
types.setTypeParser(timestamptzOID, (v) => v)
types.setTypeParser(dateOID, (v) => v)

const environments = require('../environments/index')
/*
 *- Gọi tới database postgre
 *- Lưu lại log các query đã gọi tới postgre tại models/logs/{tháng + name}postgrelog.txt
 */

const postgre = {
    run(query) {
        const pool = new pg.Pool(environments.database)
        let poolClient = null
        let result = null
        let error = null
        return pool
            .connect()
            .then((pc) => {
                poolClient = pc
            })
            .then(() => poolClient.query(query))
            .then((rs) => {
                result = rs
            })
            .catch((e) => {
                error = e
            })
            .then(() => {
                if (poolClient !== null)
                    poolClient.release((err) => {
                        if (err) {
                            // cant not release PoolClient
                        }
                    })
                if (error !== null) {
                    // query fail
                    throw error
                }

                return result
            })
    },
    runWithPrepare(query, values) {
        const pool = new pg.Pool(environments.database)
        let poolClient = null
        let result = null
        let error = null
        return pool
            .connect()
            .then((pc) => {
                poolClient = pc
            })
            .then(() =>
                poolClient.query({
                    text: query,
                    values,
                })
            )
            .then((rs) => {
                result = rs
            })
            .catch((e) => {
                error = e
            })
            .then(() => {
                if (poolClient !== null)
                    poolClient.release((err) => {
                        if (err) {
                            // cant not release PoolClient
                        }
                    })
                if (error !== null) {
                    // query fail
                    throw error
                }

                return result
            })
    },
}


module.exports = {
    postgre,
}
