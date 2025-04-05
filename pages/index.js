import dynamic from "next/dynamic";
import Head from "next/head";

import { ThemeProvider } from "../styles/Theme";
import Hero from "../components/organisms/Hero";

const Layout = dynamic(() => import("../components/Layout"));
const Footer = dynamic(() => import("../components/organisms/Footer"));

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>Nardini Academy</title>
        </Head>
        <Hero />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
