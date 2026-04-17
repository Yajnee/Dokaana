import type { Metadata } from "next";
import { DashboardHeader } from "@/app/components/dashboard-header";
import { DashboardSidebar } from "@/app/components/dashboard-sidebar";
import styles from "../dashboard.module.css";
import listingStyles from "./listings.module.css";

export const metadata: Metadata = {
  title: "Dokaana Seller Listings",
  description: "Listings structure page for Dokaana seller dashboard.",
};

const statusTabs = [
  { label: "Active", count: 0, active: true },
  { label: "Ready for Activation", count: 0 },
  { label: "Blocked", count: 0 },
  { label: "Inactive", count: 0 },
  { label: "Archived", count: 0 },
];

const filters = ["Category", "Brand", "Bank Settlement", "More Filters"];
const actions = ["Sort By", "Downloads", "Uploads", "Actions"];

export default function ListingsPage() {
  return (
    <main className={styles.page}>
      <DashboardHeader />
      <div className={styles.container}>
        <DashboardSidebar />

        <section className={styles.main}>
          <div className={listingStyles.pageShell}>
            <section className={listingStyles.hero}>
              <div className={listingStyles.tabRow}>
                {statusTabs.map((tab) => (
                  <div
                    key={tab.label}
                    className={`${listingStyles.tab} ${tab.active ? listingStyles.tabActive : ""}`}
                  >
                    <span>{tab.label}</span>
                    <strong>{tab.count}</strong>
                  </div>
                ))}
              </div>

              <div className={listingStyles.subTab}>All (0)</div>

              <div className={listingStyles.toolbar}>
                <div className={listingStyles.filterRow}>
                  {filters.map((filter) => (
                    <button key={filter} type="button" className={listingStyles.filterButton}>
                      {filter}
                    </button>
                  ))}
                  <button type="button" className={listingStyles.applyButton}>
                    Apply
                  </button>
                </div>

                <div className={listingStyles.actionRow}>
                  {actions.map((action) => (
                    <button key={action} type="button" className={listingStyles.actionButton}>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className={listingStyles.tableShell}>
              <div className={listingStyles.tableHead}>
                <span>Product Details</span>
                <span>Price &amp; Settlement</span>
                <span>Stock</span>
                <span>Returns</span>
                <span>Listing Quality</span>
                <span>Additional Info</span>
                <span>Actions</span>
              </div>

              <div className={listingStyles.emptyState}>
                <h2>Listing structure ready</h2>
                <p>
                  No products are shown here yet. This page only contains the frontend
                  structure for your listings module.
                </p>
              </div>

              <div className={listingStyles.placeholderRow}>
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
                <div className={listingStyles.placeholderBlock} />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
