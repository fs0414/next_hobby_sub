import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Children } from "react";

export const Layout = ({ children }: any) => {
  const name = "sora";
  return (
    <div className={styles.container}>
      <Head>
        <Link rel="icon" href="/favicon.ico"></Link>
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/Img01.png"
          className={utilStyles.borderCircle}
          alt={"画像イメージ"}
          width={100}
          height={100}
        />
        <h1 className={styles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
