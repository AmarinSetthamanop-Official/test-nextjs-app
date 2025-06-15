
import Footer from "../components/footer/page";

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
        {children}

        <Footer></Footer>
    </>
  );
}
