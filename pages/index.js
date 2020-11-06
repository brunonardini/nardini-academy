import Head from "next/head";

import Layout from "../components/Layout";
import Hero from "../components/organisms/Hero";
import AboutMe from "../components/organisms/AboutMe";
// import Stack from "../components/organisms/Stack";
// import Projects from "../components/organisms/Projects";
import Curriculum from "../components/organisms/Curriculum";
import Summary from "../components/organisms/Summary";
import Testimonials from "../components/organisms/Testimonials";
import Footer from "../components/organisms/Footer";
import Callout from "../components/organisms/Callout";
import { ThemeProvider } from "../styles/Theme";

const UDEMY_LINK =
  "https://www.udemy.com/course/react-redux-profissional/?referralCode=D47535C57401C62236B9";

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>React Profissional - Nardini Academy</title>
        </Head>
        <Hero courseLink={UDEMY_LINK} />
        <Summary />
        <Curriculum />
        {/* <Stack /> */}
        <AboutMe />
        {/* <Projects /> */}
        <Testimonials />
        <Callout courseLink={UDEMY_LINK} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
