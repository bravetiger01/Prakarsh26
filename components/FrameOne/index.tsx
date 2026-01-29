"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./FrameOne.module.css";

// Individual component functions
function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLogo}>
          <Image
            src="/logo.svg"
            alt="Prakarsh Logo"
            width={40}
            height={40}
          />
        </div>
        <nav className={styles.navbarLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
        </nav>
        <button className={styles.navbarCta}>Register Now</button>
      </div>
    </div>
  );
}

function TopHourGlass() {
  return (
    <div className={styles.topHourGlass}>
      <Image
        src="/TopHourGlass.svg"
        alt="Top Hour Glass"
        fill
        priority
      />
    </div>
  );
}

function LeftBorder() {
  return (
    <div className={styles.leftBorder}>
      <Image
        src="/LeftHourGlassFrame.svg"
        alt="Left Border"
        fill
        priority
      />
    </div>
  );
}

function RightBorder() {
  return (
    <div className={styles.rightBorder}>
      <Image
        src="/RightHourGlassFrame.svg"
        alt="Right Border"
        fill
        priority
      />
    </div>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <Image
        src="/TITLE_Prakarsh.svg"
        alt="Prakarsh Title"
        fill
        priority
      />
    </div>
  );
}

function TitleClouds() {
  return (
    <div className={styles.titleClouds}>
      <div className={styles.titleCloudLeft}>
        <Image
          src="/TitleCloudLeft.svg"
          alt="Title Cloud Left"
          fill
          priority
        />
      </div>
      <div className={styles.titleCloudMiddle}>
        <Image
          src="/TitleCloudMiddle.svg"
          alt="Title Cloud Middle"
          fill
          priority
        />
      </div>
      <div className={styles.titleCloudRight}>
        <Image
          src="/TitleCloudRight.svg"
          alt="Title Cloud Right"
          fill
          priority
        />
      </div>
    </div>
  );
}

function MainElement() {
  return (
    <div className={styles.MainElement}>
      <Image
        src="/MainElement.svg"
        alt=" Main Element"
        fill
        priority
      />
    </div>
  );
}

function Union() {
  return (
    <div className={styles.union}>
      <Image
        src="/Union.svg"
        alt="Union Water Wheel Base"
        fill
        priority
      />
    </div>
  );
}

function WaterMillRotating() {
  return (
    <div className={styles.waterMillRotating}>
      <Image
        src="/WaterMillRotating.svg"
        alt="Water Mill Rotating"
        fill
        priority
      />
    </div>
  );
}

function Babbage() {
  return (
    <div className={styles.babbage}>
      <Image
        src="/Babbage3people.svg"
        alt="Babbage People"
        fill
        priority
      />
    </div>
  );
}


function Stars() {
  return (
    <div className={styles.stars}>
      <Image
        src="/Stars.svg"
        alt="Stars Background"
        fill
        priority
      />
    </div>
  );
}

function GeomatricalCircle() {
  return (
    <div className={styles.geomatricalCircle}>
      <Image
        src="/GeomatricalCircleGrid.svg"
        alt="Geometrical Circle Grid"
        fill
        priority
      />
    </div>
  );
}

function WindWheel() {
  return (
    <div className={styles.windWheel}>
      <Image
        src="/Group19.svg"
        alt="Wind Wheel"
        fill
        priority
      />
    </div>
  );
}

function Water() {
  return (
    <div className={styles.water}>
      <Image
        src="/Water.svg"
        alt="Water"
        fill
        priority
      />
    </div>
  );
}

function ElementBaseClouds() {
  return (
    <div className={styles.elementBaseClouds}>
      <Image
        src="/ElementBaseClouds.svg"
        alt="Element Base Clouds"
        fill
        priority
      />
    </div>
  );
}

function Uppercloud() {
  return (
    <div className={styles.uppercloud}>
      <Image
        src="/Uppercloud.svg"
        alt="Upper Cloud"
        fill
        priority
      />
    </div>
  );
}

function FallingPeople1() {
  return (
    <div className={styles.fallingPeople1}>
      <Image
        src="/fallingPeople1.svg"
        alt="Falling People 1"
        fill
        priority
      />
    </div>
  );
}

function FallingPeople2() {
  return (
    <div className={styles.fallingPeople2}>
      <Image
        src="/fallingPeople2.svg"
        alt="Falling People 2"
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

function BaseHourGlass() {
  return (
    <div className={styles.baseHourGlass}>
      <Image
        src="/BaseHourGlass.svg"
        alt="Base Hour Glass"
        fill
        priority
      />
    </div>
  );
}

export default function FrameOne() {
  const [mouseX, setMouseX] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const offset = (e.clientX - centerX) / 10;
      setParallaxOffset(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.frame}>
      <div className="HeroSection">

        <TopHourGlass />
        <Navbar />
        <LeftBorder />
        <RightBorder />

        <Stars />
        <GeomatricalCircle />
        <Title />
        <TitleClouds />
        <MainElement />
        <Babbage />
        <Union />
        <WaterMillRotating />
        <WindWheel />
        <Water />
        <ElementBaseClouds />
        <div className="bg" style={{
          position: 'absolute',
          background: 'linear-gradient(to bottom,#3C2A56,#F4A27E)',
          margin: 0,
          padding: 0,
          left: 0,
          top: 0,
          height: '100vh',
          width: '100%',
          border: '4px solid yellow',
          zIndex: 100,
        }}></div>
      </div>
      <Uppercloud />
      <FallingPeople1 />
      <FallingPeople2 />
      <PurpleClouds />
      <BaseHourGlass />
    </section>
  );
}
