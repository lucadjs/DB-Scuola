const jwt = require('jsonwebtoken');
const config = require('../config');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.locals.db;

    try {
        const [rows] = await db.query('SELECT * FROM Utenti WHERE Email = ? AND Password = ?', [email, password]);
        if (rows.length === 0) {
            return res.status(401).send('Invalid credentials');
        }

        const user = rows[0];
        const token = jwt.sign({ userId: user.ID_Utente, role: user.Tipo_Utente }, config.secret);
        res.send({ token });
    } catch (err) {
        console.error('Database query failed:', err);
        res.status(500).send('Login failed');
    }
};
