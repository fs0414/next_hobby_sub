import { Layout } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Layout>
        <section className={styles.headingMd}>
          <p>index page</p>
          <Link href="/test">to post</Link>
        </section>
      </Layout>
    </>
  );
};

export default Home;
