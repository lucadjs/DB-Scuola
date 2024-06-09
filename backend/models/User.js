const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: String,
    cognome: String,
    email: String,
    password: String,
    tipo_utente: { type: String, enum: ['Studente', 'Insegnante', 'Amministratore'] },
    livello_accesso: { type: String, enum: ['Consultazione', 'Modifica', 'Root'] }
});

module.exports = mongoose.model('User', userSchema);
