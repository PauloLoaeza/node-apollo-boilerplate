import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const logger = { log: (e) => console.log(e) }

export default makeExecutableSchema({
    typeDefs,
    resolvers,
    logger
});