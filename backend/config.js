const mysql = require('mysql2/promise');

module.exports = {
    dbConfig: {
        host: '192.168.43.32', // Sostituisci con l'host del tuo database remoto
        user: 'lucadg',                  // Sostituisci con il nome utente del tuo database
        password: 'P1ppuzz0$',          // Sostituisci con la password del tuo database
        database: 'ScuolaFormazione',              // Sostituisci con il nome del tuo database
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    port: 3000,
    secret: 'supersecretkey'
};
