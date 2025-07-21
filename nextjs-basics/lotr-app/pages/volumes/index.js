import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function VolumesPage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>{introduction}</p>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <br />

        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Felloship Of The Ring
          </Link>
        </li>

        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>

        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return Of The King
          </Link>
        </li>
      </ul>

      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
