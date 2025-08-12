import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const reviewSchema = new mongoose.Schema({
   // _id: Schema.Types.ObjectId,
	title: {
		type: String,
	},
	text: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
	}
});

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

export default Review;
