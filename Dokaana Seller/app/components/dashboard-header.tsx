"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import {
  getSellerDisplayName,
  readStoredSellerProfile,
  sellerStorageKey,
} from "./seller-session";
import styles from "./dashboard-ui.module.css";

function subscribeToSellerProfile(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key === sellerStorageKey) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}

export function DashboardHeader() {
  const sellerProfile = useSyncExternalStore(
    subscribeToSellerProfile,
    readStoredSellerProfile,
    () => null
  );
  const sellerName = getSellerDisplayName(sellerProfile);
  const sellerInitial = sellerName.charAt(0).toUpperCase() || "S";

  return (
    <header className={styles.topbar}>
      <div className={styles.brandWrap}>
        <Image
          src="/dokaana-logo.png"
          alt="Dokaana logo"
          width={52}
          height={52}
          className={styles.topLogo}
        />
        <div>
          <p className={styles.topBrand}>Dokaana Seller Hub</p>
          <p className={styles.topBrandSub}>Seller dashboard</p>
        </div>
      </div>

      <div className={styles.topbarRight}>
        <span className={styles.topIcon}>Bell</span>
        <span className={styles.topIcon}>Shield</span>
        <div className={styles.userMenu}>
          <span className={styles.avatar}>{sellerInitial}</span>
          <span className={styles.userName}>{sellerName}</span>
        </div>
      </div>
    </header>
  );
}
