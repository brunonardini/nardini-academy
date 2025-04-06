import React from "react";
import Image from "next/image";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const items = [
  {
    student: { name: "Ana Paula Dezuo" },
    image: "/images/projects/hero-ana-f37ecd.jpg",
    link: "https://aquarela.vercel.app/",
  },
  {
    student: { name: "Francisco Claudeilton Dantas" },
    image: "/images/projects/hero_banner02.7aaef39a.jpg",
    link: "https://smarteye.tec.br/",
    chromatic: "https://609811fe1a29200039e3e7fa-ctrxenxpdl.chromatic.com/",
  },
  {
    student: { name: "Caio" },
    image: "/images/projects/bg-car.126726b4.jpg",
    link: "https://autoescola-kaio.vercel.app/",
  },
  {
    student: { name: "Fabiana" },
    image: "/images/projects/ferrari-360-2918130_640.jpg",
    link: "https://autoescola-fabiana.vercel.app/",
    github: "https://github.com/Fabiana-BP/autoescola-fabiana",
  },
  {
    student: { name: "Mauro Leandro dos Santos Neto" },
    image: "/images/projects/bambu.5c490cc0.jpg",
    link: "https://web-mauro-leandro.vercel.app/",
  },
  {
    student: { name: "Daniel Pericles Do Nascimento" },
    image: "/images/projects/hero.cce5ea9c.jpg",
    link: "https://autoescolanascimento-danielpernnasc.vercel.app/",
    github: "https://github.com/Danielpernnasc/react-autoescolanascimento",
  },
  {
    student: { name: "Arthur Valentim Kasper" },
    image: "/images/projects/dino-01.33b771f6.jpg",
    link: "https://3dino-academy.vercel.app/",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <div className="section">
          <SectionTopic>Projetos dos alunos</SectionTopic>
          <div className="description">
            <p>Projetos que os alunos fizeram durante o curso:</p>
          </div>
          <div className="projects">
            {items.map((project, index) => (
              <div key={index} className="project">
                {project.image && (
                  <div className="media">
                    <Image
                      src={project.image}
                      layout="fill"
                      objectFit="cover"
                      alt={`Projeto de ${project.student.name}`}
                    />
                  </div>
                )}
                <div className="body">
                  <p>{project.student.name}</p>
                </div>
                <div className="actions">
                  <a
                    href={project.link}
                    className="action"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Visitar
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="action"
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .section {
          padding: 0 0 120px 0;
        }

        .description {
          padding-bottom: 16px;
        }

        .projects {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 16px;
        }

        .project {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background-color: ${theme.colors.backgroundSecondary};
        }

        .media {
          position: relative;
          height: 120px;
        }

        .body {
          padding: 0 16px;
        }

        .actions {
          display: flex;
          padding: 0 16px 16px 16px;
        }

        .action {
          flex: 1;
        }
      `}</style>
    </>
  );
}
