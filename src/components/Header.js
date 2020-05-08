import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/redirect">
        <a>Redirect</a>
      </Link>{' '}
      |{' '}
      <Link href="/error">
        <a>Error</a>
      </Link>
      <hr />
    </header>
  );
}
