import Link from "next/link";
import { Facebook, Linkedin, Mail, Twitter, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">PowerGrid Solutions</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading the industry in precision electrical components since 1998. Dedicated to innovation, safety, and customer excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Current Transformers", "Smart Meters", "Protection Relays", "Power Supplies", "Circuit Breakers"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/products" className="transition-colors hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Technical Documentation", "Product Datasheets", "Installation Guides", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Copyright {new Date().getFullYear()} PowerGrid Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
