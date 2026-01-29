"use client";

import Image from "next/image";
import styles from "./FrameThree.module.css";

function FuturisticCity() {
  return (
    <div className={styles.futuristicCity}>
      <Image
        src="/FuturisticCity.svg"
        alt="Futuristic City"
        fill
        priority
      />
    </div>
  );
}

export default function FrameThree() {
  return (
    <section className={styles.frame}>
      <FuturisticCity />
    </section>
  );
}