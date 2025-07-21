import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>Overview</p>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </div>
  );
}
