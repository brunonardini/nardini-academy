import React from "react";

import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Toolbar from "../atoms/Toolbar";

const Hero = () => (
  <>
    <div className="hero" data-testid="hero-section">
      <Container>
        <div className="content">
          <div className="body">
            <span className="nardini-academy">Nardini Academy</span>
            <h1>Uma História de Aprendizado e Crescimento</h1>
            <h2>
              Foi um prazer imenso ter compartilhado conhecimento e ajudado
              tantos alunos em suas jornadas profissionais. Cada curso
              ministrado foi uma oportunidade de transformar vidas e carreiras
              através do desenvolvimento web.
            </h2>
            <p className="follow-message">
              Atualmente estou me dedicando a novos projetos e desafios.
              Acompanhe minha jornada através das redes:
            </p>
            <div className="actions">
              <Toolbar>
                <Button
                  color="secondary"
                  variant="outlined"
                  href="https://brunonardini.com.br/"
                >
                  Blog
                </Button>
                <Button
                  variant="outlined"
                  href="https://www.linkedin.com/in/brunonardini/"
                  data-testid="hero-linkedin-button"
                >
                  LinkedIn
                </Button>
                <Button variant="outlined" href="https://x.com/BrunoNardini">
                  Twitter
                </Button>
              </Toolbar>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <style jsx>{`
      .hero {
        background-image: url("/images/hero.jpg");
        background-position: center;
        background-size: cover;
        min-height: 100vh;
        display: flex;
        align-items: center;
      }

      .content {
        padding-bottom: 40px;
        display: flex;
        align-items: center;
        color: #fff;
      }

      .body {
        padding-right: 21px;
      }

      .nardini-academy {
        display: block;
        font-weight: 200;
        font-size: 50px;
        line-height: 60px;
      }

      .actions {
        padding-top: 16px;
      }

      .follow-message {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 200;
        opacity: 0.9;
      }

      h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
      }

      h2 {
        font-size: 20px;
        font-weight: 200;
        max-width: 800px;
      }

      @media (max-width: 1000px) {
        .nardini-academy {
          font-size: 5vw;
          line-height: 6vw;
        }

        h1 {
          font-size: 8vw;
          line-height: 9vw;
        }
      }

      @media (max-width: 1199px) {
        .nardini-academy {
          font-size: 36px;
          line-height: 53px;
        }

        h1 {
          font-size: 50px;
          line-height: 60px;
        }
      }

      @media (max-width: 767px) {
        .nardini-academy {
          font-size: 28px;
          line-height: 42px;
        }

        h1 {
          font-size: 40px;
          line-height: 50px;
        }
      }
    `}</style>
  </>
);

export default Hero;
