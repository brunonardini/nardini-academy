import React from "react";

import { useTheme } from "../../styles/Theme";

export default function AboutHeader() {
  const theme = useTheme();

  return (
    <>
      <div className="header">
        <img src="/images/logo_200px_transp.png" alt="Nardini Academy logo" />
        <h1 className="title">Nardini Academy</h1>
        <h2>Hoje melhor que ontem, amanhã melhor que hoje</h2>
      </div>
      <style jsx>{`
        .header {
          background-color: #1b292c;
          background-image: url("/images/34-1.jpg");
          background-position: center center;
          height: 100vh;
          text-align: center;
          padding: 200px 0 120px;
        }

        .title {
          font-size: 72px;
        }
      `}</style>
    </>
  );
}
