import React from "react";

import { useTheme } from "../../styles/Theme";
import Container from "../atoms/Container";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <>
      <div className="about-me">
        <Container>
          <div className="content">
            <div className="media">
              <div
                className="nardini"
                role="img"
                aria-label="Foto do Bruno Nardini"
              />
            </div>
            <div className="body">
              <h3>O Profissional</h3>
              <p>
                Olá! Meu nome é <strong>Bruno Nardini</strong>, eu desenvolvo e
                projeto produtos e soluções WEB e Mobile.
              </p>
              <p>
                Filho de professora, eu absorvi a paixão pelo ensino, então
                tenho costume de dar palestras e treinamentos para disseminar
                conhecimento e trocar experiências. O último foi um treinamento
                em React e Redux na empresa em que trabalhava, para um time que
                já trabalhava com a tecnologia. O feedback foi ótimo e, como
                costumo fazer, transformei o treinamento em um curso online.
              </p>
              <p>
                Minha experiência? Só algumas décadas em diferentes empresas que
                você pode ver o histórico no{" "}
                <a
                  href="https://www.linkedin.com/in/brunonardini/"
                  target="_blank"
                  rel="nofollow"
                  rel="noreferrer"
                >
                  meu LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .about-me {
          background-color: ${theme.colors.backgroundSecondary};
          background-image: url("/images/7-15.jpg");
          background-size: cover;
        }

        .content {
          display: flex;
          padding: 120px 0;
        }

        .body {
          flex: 2;
          padding-left: 30px;
        }

        .media {
          flex: 1;
          padding-top: 30px;
        }

        .nardini {
          width: 100%;
          height: 400px;
          border: 2px solid ${theme.colors.secondary.main};
          border-radius: 32px;
          background-image: url("/images/nardini.jpg");
          background-position: center center;
          background-size: cover;
        }

        .nardini:hover {
          filter: grayscale(100%);
        }

        @media (max-width: 767px) {
          .content {
            flex-direction: column;
          }

          .body {
            padding-top: 16px;
            padding-left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default AboutMe;
