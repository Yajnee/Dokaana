import type { Metadata } from "next";
import { SellerLoginForm } from "@/app/components/seller-login-form";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Dokaana Seller Login",
  description: "Seller login frontend route for access to the Dokaana dashboard.",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Seller login</span>
          <h1>Access your Dokaana seller dashboard.</h1>
          <p>
            This route now connects the landing page and registration flow to the
            post-login dashboard frontend.
          </p>
        </section>

        <SellerLoginForm />
      </div>
    </main>
  );
}
