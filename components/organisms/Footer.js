import React from "react";
import Link from "next/link";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <footer className="footer">
        <Container>
          <div className="grid">
            <div>
              <img
                src="/images/logo_200px_transp.png"
                alt="Nardini Academy logo"
              />
            </div>
            <div>
              <ul className="list">
                <li>
                  <Link href="/">
                    <a className="footer-link">React Profissional</a>
                  </Link>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="http://www.brunonardini.com.br/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Meu Blog
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="http://www.brunonardini.com.br/fale-comigo"
                    target="_blank"
                    rel="nofollow"
                  >
                    Fale Comigo
                  </a>
                </li>
                <li>
                  <Link href="/about">
                    <a className="footer-link">Sobre Nardini Academy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a
                    className="footer-link"
                    href="https://twitter.com/nardiniacademy"
                    target="_blank"
                    rel="nofollow"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.youtube.com/channel/UCT6onqWIGlsQBXcF4btXOFg"
                    target="_blank"
                    rel="nofollow"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/company/5317927"
                    target="_blank"
                    rel="nofollow"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.facebook.com/nardiniacademy"
                    target="_blank"
                    rel="nofollow"
                  >
                    Facebook
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
          padding: 120px 0 80px;
        }

        .grid {
          display: grid;
          grid-column-gap: 16px;
          grid-row-gap: 16px;
          grid-template-columns: 1fr;
          grid-template-columns: repeat(3, 1fr);
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
        }

        .footer-link:hover {
          color: ${theme.colors.primary.main};
        }
      `}</style>
    </>
  );
}
