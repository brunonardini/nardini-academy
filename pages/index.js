import dynamic from "next/dynamic";
import Head from "next/head";

import { ThemeProvider } from "../styles/Theme";
import Hero from "../components/organisms/Hero";

const Layout = dynamic(() => import("../components/Layout"));
const AboutMe = dynamic(() => import("../components/organisms/AboutMe"));
const Curriculum = dynamic(() => import("../components/organisms/Curriculum"));
const Summary = dynamic(() => import("../components/organisms/Summary"));
const Testimonials = dynamic(() =>
  import("../components/organisms/Testimonials")
);
const Projects = dynamic(() => import("../components/organisms/Projects"));
const Footer = dynamic(() => import("../components/organisms/Footer"));
const Callout = dynamic(() => import("../components/organisms/Callout"));

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
        <AboutMe />
        <Testimonials />
        <Projects />
        <Callout courseLink={UDEMY_LINK} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
