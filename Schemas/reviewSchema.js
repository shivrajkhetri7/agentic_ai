import mongoose from 'mongoose';
const ReviewSchema = new mongoose.Schema({
    reviewId: {
        type: String,
        required: true,
    },
    appId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    scoreText: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: null,
    },
    text: {
        type: String,
        required: true,
    },
    replyDate: {
        type: Date,
        default: null,
    },
    replyText: {
        type: String,
        default: null,
    },
    version: {
        type: String,
        default: null,
    },
    thumbsUp: {
        type: Number,
        default: 0,
    },
    criterias: [{
        criteria: { type: String },
        rating: { type: Number, default: null },
    }],
    sentiment: {
        type: String,
        default: null,
    },
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema);

export { Review };
