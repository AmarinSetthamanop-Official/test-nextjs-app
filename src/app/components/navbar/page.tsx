import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <Image
                    src="/next.svg"
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </Link>
            

            <ul>
                <Link href="/pages/about">เกี่ยวกับเรา</Link>
                <Link href="/pages/products">สินค้า</Link>
            </ul>
        </nav>
    );
}