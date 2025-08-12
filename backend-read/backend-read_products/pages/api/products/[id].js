// import { products } from "../../../lib/products";
import dbConnect from '@/db/connect';
import Product from '@/db/models/Product';

export default async function handler(request, response) {
	await dbConnect();

	const { id } = request.query;

	//const product = await Product.findById(id);
   const product = await Product.findById(id).populate('reviews');
   
   console.log(product);

	if (!product) {
		response.status(404).json({ status: 'Not Found' });
		return;
	}

	response.status(200).json(product);
}
