import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Oil</title>
        <meta name="description" content="Welcome to the home page of our website." />
      </Head>

      <div>
        <p>หน้าแรกของ vebsite</p>

        <ul>
          <li><Link href="/auth/login">login</Link></li>
          <li><Link href="/auth/register">register</Link></li>
          <li><Link href="/pages/about">เกี่ยวกับเรา</Link></li>
        </ul>
      </div>
    </>
  );
}
