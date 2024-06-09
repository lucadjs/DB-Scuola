// const express = require('express');
// const mysql = require('mysql2/promise');
// const config = require('./config');
// const authRoutes = require('./routes/authRoutes');
// const courseRoutes = require('./routes/courseRoutes');
// const fileRoutes = require('./routes/fileRoutes');

// const app = express();
// app.use(express.json());

// (async () => {
//     try {
//         const connection = await mysql.createPool(config.dbConfig);
//         app.locals.db = connection;
//         console.log('Database connected');
//     } catch (err) {
//         console.error('Database connection failed:', err.stack);
//         process.exit(1);
//     }
// })();

// app.use('/auth', authRoutes);
// app.use('/courses', courseRoutes);
// app.use('/files', fileRoutes);

// app.listen(config.port, () => {
//     console.log(`Server running on port ${config.port}`);
// });

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
    try {
        const connection = await mysql.createPool(config.dbConfig);
        app.locals.db = connection;
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed:', err.stack);
        process.exit(1);
    }
})();

app.use('/auth', authRoutes);
app.use('/api', courseRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
