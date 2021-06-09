import React from "react";
import Head from "next/head";

import { useTheme } from "../styles/Theme";

export default function Layout({ children }) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aprenda React e todo seu ecossistema com um projeto profissional do mundo real."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#282a36" />
        <link rel="icon" href="https://nardiniacademy.com/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
          rel="preload"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="apple-touch-icon"
          href="https://nardiniacademy.com/logo192.png"
        />
        <link rel="manifest" href="https://nardiniacademy.com/manifest.json" />
      </Head>
      {children}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Montserrat", sans-serif;
          font-weight: 200;
          font-size: 100%;
          box-sizing: border-box;
          background-color: ${theme.colors.background};
          color: ${theme.colors.foreground};
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.primary.main};
          font-weight: 700;
        }

        h2 {
          color: ${theme.colors.foreground};
        }

        h3 {
          color: ${theme.colors.secondary.main};
          font-size: 48px;
          margin: 0 0 10px 0;
        }

        p {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.625;
          margin-bottom: 20px;
        }

        a {
          color: ${theme.colors.primary.main};
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
