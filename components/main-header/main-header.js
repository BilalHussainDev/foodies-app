import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meal</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
