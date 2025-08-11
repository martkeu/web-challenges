import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductPage() {
	const router = useRouter();
   const { id } = router.query;
   
	const fetcher = (url) => fetch(url).then((response) => response.json());
	const { data: product, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

	if (isLoading) {
		return <h2>...Loading...</h2>;
	}

	if (error || !product) {
		return <h2>No data available</h2>;
	}

	return (
		<div>
         <Link href="/products/">Back to overview</Link>
         
			<p>{product.name}</p>
			<p>{product.description}</p>
			<p>{product.price}</p>
		</div>
	);
}
