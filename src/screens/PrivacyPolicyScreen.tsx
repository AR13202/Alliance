import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyScreen() {
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
              Privacy Policy
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
                At Alliance Engineering Company, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Alliance Engineering Company and how we use it.
              </p>
            </div>

            <hr className="border-outline-variant/20" />

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                1. Information We Collect
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you contact us directly or submit an inquiry form on our website, we may collect the following details:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary font-body">
                <li>Your name and contact details (including email address and phone number).</li>
                <li>Company name and industrial affiliation.</li>
                <li>Your technical requirements, specifications, drawing files, or electrical parameters.</li>
                <li>Any other information you choose to provide in the inquiry textareas.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary font-body">
                <li>Provide, operate, and maintain our website.</li>
                <li>Understand and analyze how you use our website to optimize the user experience.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>Communicate with you to provide technical consultations, quotations, and product updates.</li>
                <li>Process and deliver custom transformer orders and coordinate logistics.</li>
                <li>Send technical documentation and catalog updates as requested.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                3. Technical Specifications & Intellectual Property Security
              </h2>
              <p className="text-secondary leading-relaxed">
                As a B2B manufacturer, we understand the critical nature of custom drawings, project schematics, and proprietary technical specifications. All shared technical files are treated with strict confidentiality and are only accessible by authorized engineering teams involved in design validation and manufacturing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                4. Cookies and Web Beacons
              </h2>
              <p className="text-secondary leading-relaxed">
                Like any other website, Alliance Engineering Company uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                5. Third-Party Privacy Policies
              </h2>
              <p className="text-secondary leading-relaxed">
                Alliance Engineering Company's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers or service platforms for more detailed information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary font-headline mb-4">
                6. Contact Information
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us:
              </p>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/15 space-y-2">
                <p className="font-bold text-primary">Alliance Engineering Company</p>
                <p className="text-secondary text-sm">
                  Plot No.: 417, Industrial Area Phase -2, Chandigarh, 160002, India
                </p>
                <p className="text-secondary text-sm">
                  Email: <a href="mailto:info@allianceengineeringco.com" className="text-primary font-semibold hover:underline">info@allianceengineeringco.com</a>
                </p>
                <p className="text-secondary text-sm">
                  Phone: +91-9417374546, +91-7589124094
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
