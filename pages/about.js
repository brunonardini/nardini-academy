import Head from "next/head";

import Layout from "../components/Layout";
import Footer from "../components/organisms/Footer";
import AboutHeader from "../components/organisms/AboutHeader";
import Institutional from "../components/organisms/Institutional";
import { ThemeProvider } from "../styles/Theme";

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>Nardini Academy</title>
        </Head>
        <AboutHeader />
        <Institutional />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
