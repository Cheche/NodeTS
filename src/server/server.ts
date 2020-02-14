import express = require('express');
import path = require('path');


export default class Server {

    public app: express.Application;
    public port: number;


    constructor( port: number ) {
        this.port = port;
        this.app = express();
    }

    // Al ser estatico siempre usa la misma instancia.
    // Singletone.
    static init (port: number) {
        return new Server( port );
    }

    /**
     * Start Server listening
     * @param callback function callback
     */
    start( callback: Function ) {
        this.app.listen( this.port, callback() );   // app listeing
        this.publicFolder();                        // add middleware public folder
    }

    /**
     * Public Folder's path 
     */
    private publicFolder() {
        const publicPath = path.resolve( __dirname, '../public');
        this.app.use( express.static( publicPath ) );
    }

}