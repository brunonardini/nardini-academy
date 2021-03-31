import React from "react";
import Image from "next/image";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const items = [
  {
    student: { name: "Caio" },
    link: "https://autoescola-kaio.vercel.app/",
    github: "",
  },
  {
    student: { name: "Augusto Scher" },
    link: "https://react-profissional.vercel.app/",
    github: "",
  },
  {
    student: { name: "Fabiana" },
    image: "/images/projects/ferrari-360-2918130_640.jpg",
    link: "https://autoescola-fabiana.vercel.app/",
    github: "https://github.com/Fabiana-BP/autoescola-fabiana",
  },
  {
    student: { name: "Daniel Pericles Do Nascimento" },
    image: "/images/projects/hero.cce5ea9c.jpg",
    link: "https://autoescolanascimento-danielpernnasc.vercel.app/",
    github: "https://github.com/Danielpernnasc/react-autoescolanascimento",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <div className="section">
          <SectionTopic>Projeto dos alunos</SectionTopic>
          <p>Projetos que os alunos fizeram durante o curso:</p>
          <div className="projects">
            {items.map((project, index) => (
              <div key={index} className="project">
                {project.image && (
                  <div className="media">
                    <Image
                      src={project.image}
                      layout="fill"
                      objectFit="cover"
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
                    rel="nofollow"
                    rel="noreferrer"
                  >
                    Visitar
                  </a>
                  <a
                    href={project.github}
                    className="action"
                    target="_blank"
                    rel="nofollow"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .section {
          padding: 80px 0;
        }

        .projects {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 8px;
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
        }

        .action {
          flex: 1;
          border: 1px solid ${theme.colors.divider};
          border-radius: 0 8px 0 8px;
        }
      `}</style>
    </>
  );
}
