import React from "react";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const items = [
  { student: { name: "Caio" }, link: "https://autoescola-kaio.vercel.app/" },
  {
    student: { name: "Augusto Scher" },
    link: "https://react-profissional.vercel.app/",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <div className="projects">
          <SectionTopic>Projetos dos alunos</SectionTopic>
          <p>Projetos que os alunos fizeram durante o curso:</p>
          <div>
            {items.map((project, index) => (
              <div key={index}>
                <p>{project.student.name}</p>
                <p>
                  <a href={project.link}>{project.link}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .projects {
          padding: 80px 0;
        }
      `}</style>
    </>
  );
}
