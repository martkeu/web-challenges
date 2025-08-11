import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
   const fishProducts = getAllProducts();

  response.status(200).json(fishProducts);
}