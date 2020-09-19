import React from "react";

import { useTheme } from "../styles/Theme";
import Container from "./Container";

const projects = [
  {
    title: "Introdução e Conceitos básicos",
  },
  {
    title: "Fundamentos",
  },
  {
    title: "Fundatamentos II",
  },
  {
    title: "Deployment",
  },
  {
    title: "Entrega Contínua",
  },
  {
    title: "React com Redux",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <div className="projects">
        <Container>
          <h3>Conteúdo programático</h3>
          <div className="project-list">
            {projects.map((project, index) => (
              <div className="project" key={`project-${index}`}>
                <img src="" />
                <div className="project-body">
                  <h4>{project.title}</h4>
                  {project.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <style jsx>{`
        .projects {
          padding: 80px 0;
        }

        .project-list {
        }
      `}</style>
    </>
  );
}
