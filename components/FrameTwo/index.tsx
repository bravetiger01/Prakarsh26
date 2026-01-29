"use client";

import Image from "next/image";
import styles from "./FrameTwo.module.css";

function FallingPeople() {
  return (
    <div className={styles.fallingPeople}>
      <Image
        src="/MiddleCloudsAndFallingPeople.svg"
        alt="Falling People"
        fill
        priority
      />
    </div>
  );
}

function PurpleClouds() {
  return (
    <div className={styles.purpleClouds}>
      <Image
        src="/PurpleClouds.svg"
        alt="Purple Clouds"
        fill
        priority
      />
    </div>
  );
}

export default function FrameTwo() {
  return (
    <section className={styles.frame}>
      <FallingPeople />
      <PurpleClouds />
    </section>
  );
}