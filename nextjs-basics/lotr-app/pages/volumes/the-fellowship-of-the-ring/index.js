import Link from "next/link";
import { volumes } from "../../../lib/data";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TheFellowshipOfTheRingPage() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const url = currentUrl.slice(currentUrl.lastIndexOf("/") + 1);
  console.log(url);
  const slugs = volumes.map((volume) => volume.slug);
  console.log(slugs);

  return (
    <div>
      <p>
        <Link href="/volumes">&larr; All Volumes</Link>
      </p>

      <h1>{volumes[0].title}</h1>
      <p>{volumes[0].description}</p>

      <ul>
        {volumes[0].books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>

      <Image
        // src="/images/the-fellowship-of-the-ring.png"
        src={volumes[0].cover}
        width={140}
        height={230}
        alt={volumes[0].title}
      />
    </div>
  );
}
