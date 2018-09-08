export default `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    extend type Query {
        users: [User!]!
        user(id: ID!): User
    }

    extend type Mutation {
        addUser(user: UserNew!): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, user: UserUpdate!): User
        login(email: String!, password: String!): LoginResponse!
    }

    type LoginResponse {
        success: Boolean!
        token: String
        message: String!
    }

    input UserNew {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdate {
        name: String!
        email: String!
    }
`;