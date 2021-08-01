const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day : {
        type: Date,
        default: () => {
            new Date()
        }
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'exercise type is required.'
            },
            name: {
                type: String,
                trim: true,
                require: 'exercise name is required.'
            },
            duration: {
                type: String,
                require: 'exercise duration is required.'
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;