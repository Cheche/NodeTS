/**
 * MySQL class with Singleton pattern
 */

 import mysql = require('mysql');

 export default class MySQL {

    private static _instance: MySQL;     // for singleton


    connection: mysql.Connection;
    connected: boolean = false;
    
    constructor() {
        console.log('MySQL init... {Check for Singleton}');
        
        this.connection = mysql.createConnection({
            host: 'nodets-mysql',
            user: 'userdb',
            password: 'userpass',
            database: 'database'
        });
        
        this.connectDB();
    }
    
    /**
     * Connect to DB
     */
    private connectDB() {
        this.connection.connect( (err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }
            
            this.connected = true;
            console.log('Database connection stablished');
        });
    }
    

    /**
     * Singletone def
     * Check if exist an instance.
     * Return THIS instance.
     */
    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }
    

    /**
     * Querys SQL
     */
    static executeQuery( query: string, callback:  Function) {
        this.instance.connection.query( query, (err, results: Object[], fields )=>{
            
            if (err) {
                console.log('Query Error');
                console.log(err);
                return callback(err);
            }

            callback(null, results);

        });
    }
    
}