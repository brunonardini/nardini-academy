import React from "react";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import Button from "../atoms/Button";

export default function Institutional() {
  const theme = useTheme();

  return (
    <>
      <div className="institutional">
        <Container>
          <div className="grid">
            <div>
              <img
                alt="Figura do Bruno Nardini na frente do computador com uma xícara de café ao lado"
                src="/images/namission.png"
                className="image"
              />
            </div>
            <div className="content">
              <h3 className="topic">Missão</h3>
              <p>
                Levar ensino de tecnologia de qualidade para todos, a fim de
                ajudá-los a alcançar seus sonhos e mudar o mundo.
              </p>
              <h3 className="topic">Visão</h3>
              <p>
                Ser reconhecido como um núcleo de excelência no ensino de
                desenvolvimento de software.
              </p>
            </div>
          </div>
          <div className="callout">
            <Button
              href="http://www.brunonardini.com.br/nardini-academy"
              color="primary"
              variant="outlined"
            >
              Conheça a história de como surgiu a Nardini Academy
            </Button>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .institutional {
          background-color: #1b292c;
          padding-bottom: 120px;
        }

        .grid {
          display: flex;
        }

        .content {
          padding-left: 80px;
          flex: 1;
        }

        .image {
          width: 100%;
          max-width: 400px;
        }

        .topic {
          font-size: 2rem;
        }

        .callout {
          text-align: center;
          padding: 200px 0 80px;
        }
      `}</style>
    </>
  );
}
