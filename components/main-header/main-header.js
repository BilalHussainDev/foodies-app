import Link from "next/link";
import Image from "next/image";

import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";
import Navigation from "./navigation";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <Navigation />
      </header>
    </>
  );
}
