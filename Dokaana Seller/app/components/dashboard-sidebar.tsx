"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./dashboard-ui.module.css";

const navItems = [
  { icon: "⌂", label: "Home", href: "/dashboard" },
  { icon: "☰", label: "Listings", href: "/dashboard/listings" },
  { icon: "▣", label: "Inventory", href: "/dashboard/inventory" },
  { icon: "▤", label: "Orders", href: "/dashboard" },
  { icon: "◫", label: "Payments", href: "/dashboard" },
  { icon: "↗", label: "Growth", href: "/dashboard" },
  { icon: "◉", label: "Advertising", href: "/dashboard" },
  { icon: "▥", label: "Reports", href: "/dashboard" },
  { icon: "◌", label: "Partner Services", href: "/dashboard" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Link href="/" className={styles.backHome}>
        Back
      </Link>
    </aside>
  );
}
