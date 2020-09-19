import React from "react";

import { useTheme } from "../styles/Theme";
import Container from "./Container";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <div className="about-me">
          <div className="media">
            <img src="/images/nardini-black.jpg" alt="Foto do Bruno Nardini" />
          </div>
          <div className="body">
            <h3>O Profissional</h3>
            <p>
              Olá! Meu nome é <strong>Bruno Nardini</strong>, eu desenvolvo e
              projeto produtos e soluções Web e Mobile.
            </p>
            <p>
              Filho de professora, eu absorvi a paixão pelo ensino, então tenho
              costume de dar palestras e treinamentos para disseminar
              conhecimento e trocar experiências. O último foi um treinamento em
              React e Redux na empresa em que trabalhava, para um time que já
              trabalhava com a tecnologia. O feedback foi ótimo e, como costumo
              fazer, transformei o treinamento em um curso online.
            </p>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .about-me {
          display: flex;
          padding: 80px 0;
        }

        .body {
          flex: 2;
          padding-left: 21px;
        }

        .media {
          flex: 1;
        }

        img {
          width: 100%;
          border: 2px solid ${theme.colors.secondary.main};
          border-radius: 32px;
        }
      `}</style>
    </>
  );
};

export default AboutMe;
