const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    id_classe: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    id_insegnante: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    data: Date,
    ora_inizio: String,
    ora_fine: String,
    totale_ore: Number,
    argomento: String,
    modalita: { type: String, enum: ['Remoto', 'In presenza'] }
});

module.exports = mongoose.model('Lesson', lessonSchema);
