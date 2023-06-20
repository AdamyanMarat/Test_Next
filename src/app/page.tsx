import Link from "next/link";

export default function Page() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
