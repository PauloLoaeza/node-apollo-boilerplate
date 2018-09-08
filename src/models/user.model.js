import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

User.pre('save', function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

User.methods.isValidPassword = function(password, next) {
    return bcrypt.compare(password, this.password, next);
}

export default mongoose.model('User', User);