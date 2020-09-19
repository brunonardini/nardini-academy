import Head from "next/head";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Summary from "../components/Summary";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>React Profissional - Nardini Academy</title>
      </Head>
      <Hero />
      <Summary />
      <Projects />
      <Stack />
      <AboutMe />
    </Layout>
  );
}
