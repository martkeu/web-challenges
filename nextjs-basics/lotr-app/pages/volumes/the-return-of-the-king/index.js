import Link from "next/link";
import { volumes } from "../../../lib/data";
import Image from "next/image";

export default function TheReturnofTheKingPage() {
  return (
    <div>
      <p>
        <Link href="/volumes">&larr; All Volumes</Link>
      </p>

      <h1>{volumes[2].title}</h1>
      <p>{volumes[2].description}</p>

      <ul>
        {volumes[2].books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>

      <Image
        // src="/images/the-return-of-the-king.png"
        src={volumes[2].cover}
        width={140}
        height={230}
        alt={volumes[2].title}
      />
    </div>
  );
}
