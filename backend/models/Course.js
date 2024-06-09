const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    nome_corso: String,
    descrizione: String,
    durata: Number,
    tipo: { type: String, enum: ['A pagamento', 'Gratuito sovvenzionato'] }
});

module.exports = mongoose.model('Course', courseSchema);
