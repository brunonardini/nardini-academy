import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <footer className="footer">
        <Container>
          <div className="grid">
            <div className="image-column">
              <div className="image-container">
                <Image
                  src="/images/logo_200px_transp.png"
                  alt="Nardini Academy logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/brunonardini/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://x.com/BrunoNardini"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.instagram.com/bruno.nardini.dev/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://github.com/brunonardini"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
      <style jsx>{`
        .footer {
          background-color: #181828;
          border-top: 1px solid #313646;
          padding: 80px 0;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .list {
          list-style: none;
          padding-left: 0;
        }

        .list > li {
          margin-bottom: 16px;
        }

        .footer-link {
          color: ${theme.colors.foreground};
          font-size: 1.2rem;
          text-decoration: none;
        }

        .footer-link:hover {
          color: ${theme.colors.primary.main};
        }

        .image-container {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .list {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}
