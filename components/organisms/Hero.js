import React from "react";

import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Toolbar from "../atoms/Toolbar";
import Image from "next/image";

const Hero = ({ courseLink }) => (
  <>
    <div className="hero">
      <Container>
        <div className="content">
          <div className="body">
            <span className="nardini-academy">Nardini Academy</span>
            <h1>React Profissional</h1>
            <h2>
              Aprenda React e todo seu ecossistema com um projeto profissional
              do mundo real.
            </h2>
            <div className="actions">
              <Toolbar>
                <Button
                  variant="outlined"
                  onClick={() => {
                    document.querySelector("#summary").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Saiba mais
                </Button>
                <Button color="secondary" variant="outlined" href={courseLink}>
                  Matricule-se
                </Button>
              </Toolbar>
            </div>
          </div>
          <div className="media">
            <Image
              src="/images/react-rocket-transp600.png"
              alt="React Profissional logo"
              width={386}
              height={386}
            />
          </div>
        </div>
      </Container>
    </div>

    <style jsx>{`
      .hero {
        background-image: url("/images/hero.jpg");
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

      h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 100px;
        line-height: 100px;
      }

      h2 {
        font-size: 20px;
        font-weight: 200;
      }

      @media (max-width: 1000px) {
        .nardini-academy {
          font-size: 5vw;
          line-height: 6vw;
        }

        h1 {
          font-size: 10vw;
          line-height: 10vw;
        }
      }

      @media (max-width: 1199px) {
        .nardini-academy {
          font-size: 36px;
          line-height: 53px;
        }

        h1 {
          font-size: 80px;
          line-height: 90px;
        }
      }

      @media (max-width: 935px) {
        .media {
          display: none;
        }
      }

      @media (max-width: 767px) {
        .nardini-academy {
          font-size: 28px;
          line-height: 42px;
        }

        h1 {
          font-size: 50px;
          line-height: 60px;
        }
      }
    `}</style>
  </>
);

export default Hero;
