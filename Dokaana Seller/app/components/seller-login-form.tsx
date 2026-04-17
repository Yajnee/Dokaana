"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useSyncExternalStore, useState } from "react";
import {
  getSellerDisplayName,
  readStoredSellerProfile,
  sellerStorageKey,
  type SellerProfile,
} from "./seller-session";
import styles from "./seller-login-form.module.css";

type LoginState = {
  phone: string;
  password: string;
};

const initialState: LoginState = {
  phone: "",
  password: "",
};

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

function useSellerProfile(): SellerProfile | null {
  return useSyncExternalStore(
    subscribeToSellerProfile,
    readStoredSellerProfile,
    () => null
  );
}

export function SellerLoginForm() {
  const router = useRouter();
  const sellerProfile = useSellerProfile();
  const sellerName = getSellerDisplayName(sellerProfile);
  const [form, setForm] = useState<LoginState>({
    ...initialState,
    phone: "",
  });
  const [status, setStatus] = useState("Use your seller mobile number and password.");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const profilePhone = sellerProfile?.phone?.trim() || "";
    const phoneToValidate = form.phone.trim() || profilePhone;

    if (!/^\d{10}$/.test(phoneToValidate) || form.password.trim().length < 4) {
      setStatus("Enter a valid 10-digit mobile number and a password with at least 4 characters.");
      return;
    }

    setStatus(`Login verified for ${sellerName}. Redirecting to dashboard.`);

    window.setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  }

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Login form</span>
        <h2>Welcome back, {sellerName}.</h2>
        <p className={styles.helperText}>Use the registered seller details to continue.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Mobile number
          <input
            type="tel"
            name="phone"
            placeholder={sellerProfile?.phone?.trim() || "10-digit mobile number"}
            value={form.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Login
        </button>

        <p className={styles.status}>{status}</p>
      </form>
    </section>
  );
}
