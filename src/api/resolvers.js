const knex = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await knex('users').where({ id }).first()
        },
        async getUsers() {
            return await knex('users')
        }
    },
    Mutation: {
        async createUser (_, { input }) {
            const result = await knex('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await knex('users').where({ id }).first()
        }
    }
}