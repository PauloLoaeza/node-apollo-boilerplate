import jwt from 'jsonwebtoken';
import User from './models/user.model';

export default {
    authenticate: async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) return done(null, false, { message: 'user not found' });

            const isValidPassword = await user.isValidPassword(password);
            if (!isValidPassword) return done(null, false, { message: 'invalid password' });

            return done(null, user, { message: `Welcome ${user.name}` });
        } catch (error) {
            done(error);
        }
    },
    generateToken: (user, secret) => {
        return jwt.sign({ user: user.id }, secret);
    }
};