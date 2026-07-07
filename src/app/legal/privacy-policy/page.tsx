import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Legal", href: "/legal/privacy-policy" },
    { name: "Privacy Policy" }
  ];

  return (
    <div className="py-6">
      <PageHero
        title="Privacy Policy"
        description="Last updated: June 30, 2026. This policy describes how CLLERO collects, protects, and handles operator and member data."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 px-6 md:px-12 max-w-3xl mx-auto prose prose-cyan text-text-body text-xs leading-relaxed space-y-6 text-left relative z-10">
        <h3 className="text-lg font-bold text-text-heading border-b border-primary/5 pb-2">1. Information We Collect</h3>
        <p>
          We collect personal and business information you provide directly to us when requesting a platform demo, subscribing to billing plans, or supplying database credentials for data migrations. This includes name, gym name, phone, email, Stripe keys, and backup database files containing customer registration entries.
        </p>

        <h3 className="text-lg font-bold text-text-heading border-b border-primary/5 pb-2">2. How We Use Information</h3>
        <p>
          We use this data to administer your software dashboard account, configure Stripe POS transactions, support your custom domain mapping, host your website, and contact you with system updates. We do not sell, rent, or lease operator or member lists to third parties.
        </p>

        <h3 className="text-lg font-bold text-text-heading border-b border-primary/5 pb-2">3. Data Integrity & Security</h3>
        <p>
          All scheduling, payment transaction, and customer records are encrypted in transit and at rest using SSL/TLS protocols and hosted on secure AWS servers. We enforce strict role-based access for our technical migration teams to prevent unauthorized data reads.
        </p>

        <h3 className="text-lg font-bold text-text-heading border-b border-primary/5 pb-2">4. Contact Information</h3>
        <p>
          If you have questions regarding this Privacy Policy or wish to request data deletion/export options, contact us at <a href="mailto:privacy@cllero.com" className="text-primary font-bold hover:underline">privacy@cllero.com</a>.
        </p>
      </section>
    </div>
  );
}
