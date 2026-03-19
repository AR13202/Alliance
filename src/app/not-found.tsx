import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />
      <main className="flex min-h-[calc(100vh-112px)] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05),_transparent_36%),linear-gradient(180deg,_#0f141c_0%,_#0c1017_100%)] px-4">
        <div className="rounded-xl border border-slate-800 bg-[#121924] px-10 py-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">404</h1>
          <p className="mb-4 text-xl text-slate-400">Oops! Page not found</p>
          <Link href="/" className="text-sky-300 underline hover:text-sky-200">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
