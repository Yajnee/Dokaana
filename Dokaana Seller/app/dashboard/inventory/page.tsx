import type { Metadata } from "next";
import { DashboardHeader } from "@/app/components/dashboard-header";
import { DashboardSidebar } from "@/app/components/dashboard-sidebar";
import styles from "../dashboard.module.css";
import inventoryStyles from "./inventory.module.css";

export const metadata: Metadata = {
  title: "Dokaana Seller Inventory",
  description: "Inventory structure page for Dokaana seller dashboard.",
};

const inventoryTabs = [
  { label: "All Inventory", count: "0 SKUs", active: true },
  { label: "Low Stock", count: "0 SKUs" },
  { label: "Out of Stock", count: "0 SKUs" },
  { label: "Recommendations", count: "0 SKUs" },
];

export default function InventoryPage() {
  return (
    <main className={styles.page}>
      <DashboardHeader />
      <div className={styles.container}>
        <DashboardSidebar />

        <section className={styles.main}>
          <div className={inventoryStyles.pageShell}>
            <section className={inventoryStyles.hero}>
              <div className={inventoryStyles.breadcrumbs}>
                <span>Home</span>
                <span>Inventory</span>
              </div>

              <div className={inventoryStyles.titleRow}>
                <h1>Inventory Health</h1>

                <div className={inventoryStyles.topFilters}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={inventoryStyles.searchInput}
                  />
                  <button type="button" className={inventoryStyles.selectButton}>
                    Seller Fulfilment
                  </button>
                  <button type="button" className={inventoryStyles.selectButton}>
                    Bhadrak : 756113
                  </button>
                </div>
              </div>

              <div className={inventoryStyles.tabGrid}>
                {inventoryTabs.map((tab) => (
                  <article
                    key={tab.label}
                    className={`${inventoryStyles.tabCard} ${tab.active ? inventoryStyles.tabCardActive : ""}`}
                  >
                    <h2>{tab.label}</h2>
                    <p>{tab.count}</p>
                  </article>
                ))}
              </div>

              <div className={inventoryStyles.inlineStats}>
                <span>10 units</span>
                <span>DOH less than 14 days</span>
              </div>
            </section>

            <section className={inventoryStyles.noticeBar}>
              <p>
                Inventory structure is ready. Seller advisories and automated offer-style
                modules are intentionally removed for now.
              </p>
            </section>

            <section className={inventoryStyles.controlsRow}>
              <div className={inventoryStyles.leftControls}>
                <button type="button" className={inventoryStyles.primaryControl}>
                  Bulk Stock Update
                </button>
                <button type="button" className={inventoryStyles.secondaryControl}>
                  Download Report
                </button>
              </div>
            </section>

            <section className={inventoryStyles.filterBar}>
              <button type="button" className={inventoryStyles.selectButton}>
                Categories
              </button>
              <button type="button" className={inventoryStyles.applyButton}>
                Apply
              </button>
            </section>

            <section className={inventoryStyles.tableShell}>
              <div className={inventoryStyles.tableHead}>
                <span>Product Information</span>
                <span>Current Stock</span>
                <span>Average Daily Sales</span>
                <span>Days on Hand</span>
              </div>

              <div className={inventoryStyles.emptyState}>
                <h2>No data to display</h2>
                <p>
                  This inventory page only provides the frontend structure. Product rows
                  and stock data will be connected later.
                </p>
              </div>

              <div className={inventoryStyles.footerBar}>
                <span>10 Items per page</span>
                <span>0-0 of 0 items</span>
                <span>1 of 1 pages</span>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
