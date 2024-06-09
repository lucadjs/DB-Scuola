exports.getCourses = async (req, res) => {
    const db = req.app.locals.db;
    try {
        const [rows] = await db.query('SELECT * FROM Corsi');
        res.json(rows);
    } catch (err) {
        res.status(500).send('Database query failed');
    }
};

exports.addCourse = async (req, res) => {
    const db = req.app.locals.db;
    const { Nome_Corso, Descrizione, Durata, Tipo } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Corsi (Nome_Corso, Descrizione, Durata, Tipo) VALUES (?, ?, ?, ?)', [Nome_Corso, Descrizione, Durata, Tipo]);
        res.json({ id: result.insertId, Nome_Corso, Descrizione, Durata, Tipo });
    } catch (err) {
        res.status(500).send('Database query failed');
    }
};

exports.updateCourse = async (req, res) => {
    const db = req.app.locals.db;
    const { id } = req.params;
    const { Nome_Corso, Descrizione, Durata, Tipo } = req.body;
    try {
        await db.query('UPDATE Corsi SET Nome_Corso = ?, Descrizione = ?, Durata = ?, Tipo = ? WHERE Id_Corso = ?', [Nome_Corso, Descrizione, Durata, Tipo, Id_Corso]);
        res.json({ Id_Corso, Nome_Corso, Descrizione, Durata, Tipo });
    } catch (err) {
        res.status(500).send('Database query failed');
    }
};

exports.deleteCourse = async (req, res) => {
    const db = req.app.locals.db;
    const { id } = req.params;
    try {
        await db.query('DELETE FROM Corsi WHERE Id_Corso = ?', [id]);
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(500).send('Database query failed');
    }
};
