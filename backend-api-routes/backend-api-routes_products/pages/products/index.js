import useSWR from 'swr';
import Link from 'next/link';

export default function ProductsPage() {
	const fetcher = (url) => fetch(url).then((response) => response.json());

	const { data: products, isLoading, error } = useSWR('/api/products/', fetcher);

	if (isLoading) {
		return <h2>...Loading...</h2>;
	}

   if (error || !products) {
      return <h2>No data available</h2>;
   }

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/products/${product.id}`}>{product.name}</Link>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</li>
			))}
		</ul>
	);
}
