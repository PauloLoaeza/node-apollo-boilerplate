import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './schema';
import models from './models';
import dotenv from 'dotenv';
import auth from './auth';

const config = dotenv.config().parsed;

const context = ({ req }) => ({
    models,
    auth,
    config
});

const server = new ApolloServer({ schema, context });
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true }, onMongoConnected);

function onMongoConnected() {
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}