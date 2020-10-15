import Head from "next/head";

import Layout from "../components/Layout";
import Footer from "../components/organisms/Footer";
import AboutHeader from "../components/organisms/AboutHeader";
import Institutional from "../components/organisms/Institutional";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nardini Academy</title>
      </Head>
      <AboutHeader />
      <Institutional />
      <Footer />
    </Layout>
  );
}
