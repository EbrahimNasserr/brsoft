"use client";
import Link from "next/link";
import styles from "./style.module.css";

export default function Project({ index, title, href, setModal }) {
  return (
    <Link
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
      href={href}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </Link>
  );
}
