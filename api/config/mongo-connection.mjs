import mongoose from "mongoose";

/**
 * mongoDB config
 * @author Brian
 */
export default class MongoConnection {
    async connect() {
        let connection;
        try {
            connection = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (err) {
            console.log('database connection failed. exiting now...');
            console.error(err);
            process.exit(1);
        }
    }
}