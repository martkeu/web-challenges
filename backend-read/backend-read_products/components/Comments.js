import styled from "styled-components";

export default function Comments({ reviews }) {
   console.log(reviews);
   
   if (reviews.length < 1) {
      return <h3>No comments available for this fish</h3>
   }

	return (
		<>
         <h3>Comments</h3>
         
			<Ul>
				{reviews.map((review) => (
					<Li key={review._id}>
						<h4>{review.title}</h4>

						<p>{review.text}</p>

						<small>
							<b>Rating</b>: {review.rating}/5
						</small>
					</Li>
				))}
			</Ul>
		</>
	);
}

const Ul = styled.ul`
   /* margin-left: -2rem; */
   list-style-type:none
`;

const Li = styled.li`
   padding-bottom: 5px;
   border-bottom: 1px solid #a1a0a0ff;
`;