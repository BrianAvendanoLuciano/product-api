/**
 * Connection for all of the databases
 * @author Brian
 */
export default class Database {
    /**
     * where the database connection will be assigned
     */
    #connection;

    /**
     * initialize database connection
     * @param {DatabaseConnectionClass} Connection 
     */
    constructor(Connection) {
        this.#connection = new Connection;
    }

    /**
     * this will call the connection method 
     * from the given database connection
     * @returns DatabaseConnection
     */
    async connect() {
        try {
            await this.#connection.connect();
        } catch (err) {
            console.log(err.getMessage());
        }
    }
}