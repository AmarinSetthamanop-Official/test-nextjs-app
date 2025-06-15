

import Navbar from "../components/navbar/page";


export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />

        {children}
    </>
  );
}
