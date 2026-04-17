"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { sellerStorageKey } from "./seller-session";
import styles from "./seller-registration-form.module.css";

type FormState = {
  shopName: string;
  ownerName: string;
  category: string;
  city: string;
  phone: string;
  gst: string;
  acceptedTerms: boolean;
};

const initialState: FormState = {
  shopName: "",
  ownerName: "",
  category: "",
  city: "",
  phone: "",
  gst: "",
  acceptedTerms: false,
};

export function SellerRegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("Complete the essentials and submit the form.");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = event.target;
    const nextValue =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : value;

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.shopName.trim() ||
      !form.ownerName.trim() ||
      !form.category ||
      !form.city.trim() ||
      !/^\d{10}$/.test(form.phone) ||
      !form.acceptedTerms
    ) {
      setStatus("Fix the required fields first. Use a valid 10-digit mobile number.");
      return;
    }

    setStatus(
      `Seller profile ready: ${form.shopName} in ${form.city}. Redirecting to login.`
    );

    window.localStorage.setItem(
      sellerStorageKey,
      JSON.stringify({
        shopName: form.shopName.trim(),
        ownerName: form.ownerName.trim(),
        category: form.category,
        city: form.city.trim(),
        phone: form.phone.trim(),
        gst: form.gst.trim(),
      })
    );

    window.setTimeout(() => {
      router.push("/login");
    }, 500);
  }

  return (
    <section className={styles.formPanel}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Registration form</span>
        <h2>Capture the minimum seller details.</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Shop name
          <input
            name="shopName"
            type="text"
            placeholder="Maa Tarini Handloom"
            value={form.shopName}
            onChange={handleChange}
          />
        </label>

        <label>
          Owner name
          <input
            name="ownerName"
            type="text"
            placeholder="Owner full name"
            value={form.ownerName}
            onChange={handleChange}
          />
        </label>

        <label>
          Business category
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select category</option>
            <option value="Fashion">Fashion</option>
            <option value="Grocery">Grocery</option>
            <option value="Electronics">Electronics</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Beauty">Beauty</option>
            <option value="Meat">Meat</option>
            <option value="Grocery">Grocery</option>
            <option value="Medicine">Medicine</option>
          </select>
        </label>

        <label>
          City
          <input
            name="city"
            type="text"
            placeholder="Bhadrak"
            value={form.city}
            onChange={handleChange}
          />
        </label>

        <label>
          Mobile number
          <input
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          GST number
          <input
            name="gst"
            type="text"
            placeholder="Mandatory"
            value={form.gst}
            onChange={handleChange}
          />
        </label>

        <label className={styles.checkboxRow}>
          <input
            name="acceptedTerms"
            type="checkbox"
            checked={form.acceptedTerms}
            onChange={handleChange}
          />
          <span>I confirm these details are ready for seller onboarding.</span>
        </label>

        <button type="submit" className={styles.submitButton}>
          Submit Seller Interest
        </button>

        <p className={styles.status} role="status">
          {status}
        </p>
      </form>
    </section>
  );
}
