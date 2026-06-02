import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServiceScreen() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 flex-grow">
        {/* Header */}
        <section className="bg-primary text-white py-20 px-6 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-indigo-200 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
              Terms of Service
            </h1>
            <p className="text-indigo-100 text-sm mt-4 font-body">
              Effective Date: May 31, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <p className="text-lg text-secondary leading-relaxed font-body">
                Welcome to the website of Alliance Engineering Company. These Terms of Service govern your use of our site and define the agreement for requesting quotes, design services, and procuring manufacturing items.
              </p>
            </div>

            <hr className="border-outline-variant/20" />

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-secondary leading-relaxed">
                By accessing this website, submitting inquiry forms, or booking orders with Alliance Engineering Company, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service, along with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                2. B2B Custom Engineering & Manufacturing
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                As specialized manufacturers of current transformers, control transformers, potential transformers, and battery chargers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary font-body">
                <li>All products are built or configured to client specifications (ratios, burdens, accuracy classes, etc.).</li>
                <li>Drawing approval or engineering sign-off is required before the start of full-scale production.</li>
                <li>Minor modifications in outer dimensions may occur during custom fabrication to maintain safety parameters.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                3. Quotations & Purchase Orders
              </h2>
              <p className="text-secondary leading-relaxed">
                All quotes provided via our inquiry forms or official channels are valid for 30 calendar days from the date of issue unless specified otherwise. Prices are subject to adjustment prior to final order booking due to market commodity index changes in key raw materials (electrolytic copper, CRGO steel, and insulating materials).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                4. Delivery & Logistics
              </h2>
              <p className="text-secondary leading-relaxed">
                Lead times provided in technical quotes represent estimates based on factory capacity. We deliver Pan-India directly from our manufacturing hub in Chandigarh / Panchkula. Alliance Engineering is not liable for transport delays caused by courier logistics, natural causes, or regulatory inspections.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                5. Product Warranty & Returns
              </h2>
              <p className="text-secondary leading-relaxed">
                Products carry a standard manufacturer warranty covering defects in workmanship and materials when operated under rated conditions. Because our transformers and battery chargers are custom manufactured to project-specific requirements, items cannot be returned or refunded once engineering approval is signed and manufacturing begins, unless a functional defect is identified.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                6. Governing Law & Jurisdiction
              </h2>
              <p className="text-secondary leading-relaxed">
                Any disputes arising from website interactions, orders, technical consulting, or product performance will be governed by the laws of India, and are subject to the exclusive jurisdiction of the courts in Chandigarh, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                7. Contact Information
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have questions regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 space-y-2">
                <p className="font-bold text-primary">Alliance Engineering Company</p>
                <p className="text-secondary text-sm">
                  Plot No.: 417, Industrial Area Phase -2, Chandigarh, 160002, India
                </p>
                <p className="text-secondary text-sm">
                  Email: <a href="mailto:info@allianceengineeringco.com" className="text-primary font-semibold hover:underline">info@allianceengineeringco.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
