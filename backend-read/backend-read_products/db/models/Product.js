import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import Review from './Review';

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
	reviews: {
		type: [Schema.Types.ObjectId],
		ref: 'Review',
	},
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
