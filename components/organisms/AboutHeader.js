import React from "react";
import Image from "next/image";

import { useTheme } from "../../styles/Theme";

export default function AboutHeader() {
  const theme = useTheme();

  return (
    <>
      <div className="header">
        <Image
          src="/images/logo_200px_transp.png"
          alt="Nardini Academy logo"
          width={200}
          height={200}
        />
        <h1 className="title">Nardini Academy</h1>
        <h2>Hoje melhor que ontem, amanhã melhor que hoje</h2>
      </div>
      <style jsx>{`
        .header {
          background-color: #1b292c;
          background-image: url("/images/34-1.jpg");
          background-position: bottom center;
          background-size: cover;
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
