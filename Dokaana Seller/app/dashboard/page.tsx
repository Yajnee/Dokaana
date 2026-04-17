import type { Metadata } from "next";
import { DashboardCards } from "@/app/components/dashboard-cards";
import { DashboardHeader } from "@/app/components/dashboard-header";
import { DashboardSidebar } from "@/app/components/dashboard-sidebar";
import styles from "./dashboard.module.css";

export const metadata: Metadata = {
  title: "Dokaana Seller Dashboard",
  description: "Post-login seller dashboard merged into the main Dokaana seller app.",
};

export default function DashboardPage() {
  return (
    <main className={styles.page}>
      <DashboardHeader />
      <div className={styles.container}>
      <DashboardSidebar />
      <section className={styles.main}>
        <DashboardCards />
      </section>
      </div>
    </main>
  );
}
