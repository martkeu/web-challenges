import Link from "next/link";
import { volumes } from "../../../lib/data";
import Image from "next/image";

export default function TheTwoTowersPage() {
  return (
    <div>
      <p>
        <Link href="/volumes">&larr; All Volumes</Link>
      </p>

      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>

      <ul>
        {volumes[1].books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>

      <Image
        // src="/images/the-two-towers.png"
        src={volumes[1].cover}
        width={140}
        height={230}
        alt={volumes[1].title}
      />
    </div>
  );
}
