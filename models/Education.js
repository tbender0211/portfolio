const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const EduSchema = new Schema({

    school: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const Edu = mongoose.model('Edu', EduSchema);

export default EduSchema;