import Image from "next/image";
import Link from "next/link";
import { SellerCalculator } from "@/app/components/seller-calculator";
import styles from "./page.module.css";

const metrics = [
  { value: "10 min", label: "fast onboarding start" },
  { value: "3x", label: "clearer local brand visibility" },
  { value: "24/7", label: "seller dashboard access" },
];

const benefits = [
  {
    title: "Odisha-first positioning",
    description:
      "Promote local products, trusted shops, and regional demand instead of looking like a generic marketplace clone.",
  },
  {
    title: "Simple catalog setup",
    description:
      "Start with core fields only: product name, price, stock, and a clean image. Complexity comes later, not on day one.",
  },
  {
    title: "Operational clarity",
    description:
      "Give sellers one visible flow for listings, incoming orders, and payout status so execution stays simple.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your seller identity",
    description: "Add shop details, business category, and your core contact information.",
  },
  {
    number: "02",
    title: "List products with clean pricing",
    description: "Upload product basics first so buyers can understand value fast.",
  },
  {
    number: "03",
    title: "Track orders and payouts",
    description: "Manage dispatch and settlement from one seller workflow.",
  },
];

const highlights = [
  "Built for handloom, grocery, electronics, beauty, and home sellers.",
  "Brand direction pulled from the Dokaana logo: maroon, gold, copper, cream.",
  "Next.js App Router setup ready for later API integration.",
];

export default function Home() {
  return (
    <div className={styles.pageShell}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <Link href="/" className={styles.brand}>
              <Image
                src="/dokaana-logo.png"
                alt="Dokaana logo"
                width={58}
                height={58}
                className={styles.brandLogo}
                priority
              />
              <div>
                <p className={styles.brandTitle}>Dokaana Seller</p>
                <p className={styles.brandSubtitle}>Odisha business growth</p>
              </div>
            </Link>

            <nav className={styles.navLinks} aria-label="Primary">
              <a href="#benefits">Benefits</a>
              <a href="#steps">Steps</a>
              <a href="#calculator">Calculator</a>
            </nav>

            <div className={styles.navActions}>
              <Link href="/login" className={styles.secondaryButton}>
                Login
              </Link>
              <Link href="/register" className={styles.navCta}>
                Start Selling
              </Link>
            </div>

          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>Seller-first marketplace</span>
                <h1>Bring your shop online with a Dokaana seller page that feels local, premium, and usable.</h1>
                <p className={styles.heroText}>
                  This frontend is designed for Odisha sellers who need a clear entry point,
                  strong brand trust, and a direct path from registration to product listing.
                </p>

                <div className={styles.heroActions}>
                  <Link href="/register" className={styles.primaryButton}>
                    Create Seller Account
                  </Link>
                  <a href="#calculator" className={styles.secondaryButton}>
                    Estimate Earnings
                  </a>
                </div>

                <div className={styles.metricGrid}>
                  {metrics.map((metric) => (
                    <article key={metric.label} className={styles.metricCard}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.logoFrame}>
                  <Image
                    src="/dokaana-logo.png"
                    alt="Dokaana brand preview"
                    width={260}
                    height={260}
                    className={styles.heroLogo}
                  />
                </div>

                <div className={styles.heroSummary}>
                  <p className={styles.cardKicker}>Seller Snapshot</p>
                  <h2>From trusted local shop to statewide digital presence.</h2>
                  <ul className={styles.highlightList}>
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.panelStats}>
                  <div>
                    <span>Catalog readiness</span>
                    <strong>84%</strong>
                  </div>
                  <div>
                    <span>Payout cycle</span>
                    <strong>Weekly</strong>
                  </div>
                  <div>
                    <span>Regional focus</span>
                    <strong>Odisha</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustBand}>
          <div className={styles.container}>
            <div className={styles.trustPanel}>
              <p>Trusted direction for handloom, grocery, home decor, electronics, and beauty sellers.</p>
              <div className={styles.trustTags}>
                <span>Fashion</span>
                <span>Grocery</span>
                <span>Electronics</span>
                <span>Home Decor</span>
                <span>Beauty</span>
                <span>Medicines</span>
                <span>Meat</span>
                <span>Food</span>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Why this seller page works</span>
              <h2>Minimum friction. Strong identity. Fast seller action.</h2>
            </div>

            <div className={styles.cardGrid}>
              {benefits.map((benefit) => (
                <article key={benefit.title} className={styles.infoCard}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="steps" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.processShell}>
              <div className={styles.sectionHeading}>
                <span className={styles.eyebrow}>Execution flow</span>
                <h2>Three steps to move a seller from interest to action.</h2>
              </div>

              <div className={styles.stepGrid}>
                {steps.map((step) => (
                  <article key={step.number} className={styles.stepCard}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="calculator" className={styles.section}>
          <div className={styles.container}>
            <SellerCalculator />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <div>
                <span className={styles.eyebrow}>Next route ready</span>
                <h2>Open the seller registration page and continue the flow.</h2>
              </div>
              <Link href="/register" className={styles.primaryButton}>
                Go to Register Page
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
