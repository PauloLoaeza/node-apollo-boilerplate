export default {
    Query: {
        users: async (root, args, { models: { User } }) => {
            return await User.find();
        },
        user: async (root, { id }, { models: { User } }) => {
            return await User.findById(id);
        }
    },
    Mutation: {
        login: (root, { email, password }, { auth, config: { JWT_SECRET } }) => {
            return auth.authenticate(email, password, (err, user, info) => {
                if (err) throw err;

                const { message } = info;
                if (!user) return { success: false, message };
                
                const token = auth.generateToken(user, JWT_SECRET);

                return { success: true, message, token}
            });
        },
        addUser: async (root, { user }, { models: { User } }) => {
            return await User.create(user);
        },
        deleteUser: async (root, { id }, { models: { User } }) => {
            return await User.findByIdAndRemove(id);
        },
        updateUser: async (root, { id, user }, { models: { User } }) => {
            return User.findByIdAndUpdate(id, user, { new: true });
        }
    }
};