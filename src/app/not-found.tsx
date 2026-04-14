import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="site-page min-h-screen">
      <Navbar />
      <main className="site-main flex min-h-[calc(100vh-112px)] items-center justify-center px-4">
        <div className="site-card rounded-xl border px-10 py-12 text-center">
          <h1 className="site-heading mb-4 text-5xl font-bold">404</h1>
          <p className="site-copy mb-4 text-xl">Oops! Page not found</p>
          <Link href="/" className="underline" style={{ color: "var(--site-primary)" }}>
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
