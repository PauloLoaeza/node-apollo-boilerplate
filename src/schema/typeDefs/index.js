import user from './user.type';

const schema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export default [
    schema, 
    user
]