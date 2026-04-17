import styles from "./dashboard-ui.module.css";

const summaryCards = [
  {
    title: "Impressions: 17 Apr",
    value: "1",
    metaLeft: "16 Apr: 0",
    metaRight: "Last week: 6",
  },
  {
    title: "Today's Units",
    value: "0",
    metaLeft: "Yesterday: 0",
    metaRight: "This week: 3",
  },
  {
    title: "Today's Sales",
    value: "Rs 0",
    metaLeft: "Yesterday: Rs 0",
    metaRight: "This month: Rs 0",
  },
  {
    title: "New Orders",
    value: "0",
    metaLeft: "Pending RTD: 0",
    metaRight: "Handed over: 0",
  },
  {
    title: "Today's Returns",
    value: "0",
    metaLeft: "Processing: 0",
    metaRight: "Closed: 0",
  },
  {
    title: "Upcoming Payment",
    value: "Rs 0",
    metaLeft: "Due today",
    metaRight: "Settlement pending",
  },
];

export function DashboardCards() {
  return (
    <section className={styles.content}>
      <section className={styles.searchHero}>
        <h1 className={styles.searchTitle}>Search Anything</h1>
        <div className={styles.searchShell}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            type="text"
            placeholder="Search FSN, product, order, or payout"
            className={styles.search}
          />
        </div>
      </section>

      <section className={styles.summaryGrid}>
        {summaryCards.map((card) => (
          <article key={card.title} className={styles.summaryCard}>
            <p className={styles.summaryTitle}>{card.title}</p>
            <h2 className={styles.summaryValue}>{card.value}</h2>
            <div className={styles.summaryMeta}>
              <span>{card.metaLeft}</span>
              <span>{card.metaRight}</span>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.featureBand}>
        <article className={styles.featureCard}>
          <div className={styles.featureHeader}>
            <h3>Dashboard Overview</h3>
          </div>
          <p className={styles.featureText}>
            This area is kept clean for now. Offers, promotions, and growth modules are
            intentionally removed until you decide the final dashboard features.
          </p>
        </article>
      </section>

      <button className={styles.helpButton} type="button">
        Help
      </button>
    </section>
  );
}
