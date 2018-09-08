import { merge } from 'lodash';
import user from './user.resolvers';

const resolvers = {};

export default merge(
    resolvers, 
    user
);