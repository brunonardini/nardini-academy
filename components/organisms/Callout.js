import React from "react";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import Button from "../atoms/Button";

export default function Callout({ courseLink }) {
  const theme = useTheme();

  return (
    <>
      <div className="callout">
        <Container>
          <h2 className="title">Preparado para viver essa experiência?</h2>
          <p className="text">
            Assista as primeiras aulas e veja como é o curso
          </p>
          <div>
            <Button color="secondary" href={courseLink}>
              Começar
            </Button>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .callout {
          background-color: ${theme.colors.backgroundSecondary};
          background-image: url("/images/planet.jpg");
          background-size: cover;
          padding: 180px 0;
          text-align: center;
        }

        .title {
          color: ${theme.colors.primary.main};
          font-size: 3rem;
        }

        .text {
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  );
}
