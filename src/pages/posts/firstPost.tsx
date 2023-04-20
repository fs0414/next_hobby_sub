import Link from "next/link";
import Head from "next/head";
import { Layout } from "@/components/Layout";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <section>
          <p>first article</p>
          <Link href="/">home</Link>
        </section>
      </Layout>
    </>
  );
};

export default FirstPost;
