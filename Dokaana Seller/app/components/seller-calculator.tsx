"use client";

import { useState } from "react";
import styles from "./seller-calculator.module.css";

export function SellerCalculator() {
  const [orders, setOrders] = useState(180);
  const [averageOrderValue, setAverageOrderValue] = useState(850);
  const [platformFee, setPlatformFee] = useState(8);
  const [returnRate, setReturnRate] = useState(3);

  const grossSales = orders * averageOrderValue;
  const feeAmount = grossSales * (platformFee / 100);
  const returnImpact = grossSales * (returnRate / 100);
  const estimatedPayout = grossSales - feeAmount - returnImpact;

  const formatINR = (value: number) =>
    `Rs ${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <div className={styles.shell}>
      <article className={styles.formCard}>
        <span className={styles.eyebrow}>Seller calculator</span>
        <h2>Estimate how your monthly sales translate into payout.</h2>
        <p>
          Use this to set seller expectations before backend payout APIs are connected.
        </p>

        <div className={styles.formGrid}>
          <label>
            Monthly orders
            <input
              type="number"
              min={1}
              value={orders}
              onChange={(event) => setOrders(Number(event.target.value) || 0)}
            />
          </label>

          <label>
            Average order value
            <input
              type="number"
              min={1}
              value={averageOrderValue}
              onChange={(event) =>
                setAverageOrderValue(Number(event.target.value) || 0)
              }
            />
          </label>

          <label>
            Platform fee %
            <input
              type="number"
              min={1}
              max={40}
              value={platformFee}
              onChange={(event) => setPlatformFee(Number(event.target.value) || 0)}
            />
          </label>

          <label>
            Return / cancellation %
            <input
              type="number"
              min={0}
              max={25}
              value={returnRate}
              onChange={(event) => setReturnRate(Number(event.target.value) || 0)}
            />
          </label>
        </div>
      </article>

      <article className={styles.resultCard}>
        <p className={styles.kicker}>Estimated output</p>

        <div className={styles.resultRow}>
          <span>Gross sales</span>
          <strong>{formatINR(grossSales)}</strong>
        </div>

        <div className={styles.resultRow}>
          <span>Platform fee</span>
          <strong>{formatINR(feeAmount)}</strong>
        </div>

        <div className={styles.resultRow}>
          <span>Return impact</span>
          <strong>{formatINR(returnImpact)}</strong>
        </div>

        <div className={`${styles.resultRow} ${styles.totalRow}`}>
          <span>Estimated payout</span>
          <strong>{formatINR(estimatedPayout)}</strong>
        </div>

        <p className={styles.note}>
          This is a planning estimate only. Real logistics, taxes, and settlement rules
          should come from backend logic later.
        </p>
      </article>
    </div>
  );
}
