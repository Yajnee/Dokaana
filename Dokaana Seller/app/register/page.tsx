import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SellerRegistrationForm } from "@/app/components/seller-registration-form";
import styles from "./register.module.css";

export const metadata: Metadata = {
  title: "Dokaana Seller Register",
  description: "Register a Dokaana seller account.",
};

const checklist = [
  "Shop name and owner contact",
  "Business category and city",
  "Primary mobile number",
  "GST number only if applicable",
];

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>
            Back to seller page
          </Link>

          <div className={styles.brand}>
            <Image
              src="/dokaana-logo.png"
              alt="Dokaana logo"
              width={54}
              height={54}
              className={styles.logo}
            />
            <div>
              <p className={styles.brandTitle}>Dokaana Seller Register</p>
              <p className={styles.brandSubtitle}>Onboarding route</p>
            </div>
          </div>
        </header>

        <div className={styles.layout}>
          <section className={styles.infoPanel}>
            <span className={styles.eyebrow}>Seller onboarding</span>
            <h1>Start with the essential fields only.</h1>
            <p>
              This page is intentionally lean. First capture the minimum seller data,
              then connect validation and API submission in the next step.
            </p>

            <div className={styles.logoStage}>
              <Image
                src="/dokaana-logo.png"
                alt="Dokaana branding"
                width={220}
                height={220}
                className={styles.stageLogo}
              />
            </div>

            <div className={styles.checklistCard}>
              <p className={styles.cardKicker}>What to keep ready</p>
              <ul>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <SellerRegistrationForm />
        </div>
      </div>
    </main>
  );
}
