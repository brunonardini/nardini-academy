import React from "react";

import { useTheme } from "../../styles/Theme";
import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const stackList = [
  {
    image: "react.png",
    name: "React",
    description:
      "A biblioteca JavaScript mais utilizada para construir interface de usuários.",
  },
  {
    image: "hooks.png",
    name: "React Hooks",
    description:
      "Atualmente a forma primária de gerenciamento de estado com React.",
  },
  {
    image: "react-router.png",
    name: "React Router",
    description: "",
  },
  {
    image: "styled.png",
    name: "Styled Components",
    description: "",
  },
  {
    image: "jest.png",
    name: "Jest",
    description: "",
  },
  {
    image: "octopus.png",
    name: "React Testing Library (RTL)",
    description: "",
  },
  {
    image: "storybook.png",
    name: "Storybook",
    description: "",
  },
];

export default function Stack() {
  const theme = useTheme();

  return (
    <>
      <div className="stacks">
        <Container>
          <SectionTopic>Tecnologias utilizadas</SectionTopic>
          <div className="stack-list">
            {stackList.map((tech, index) => (
              <div className="tech" key={`tech-${index}`}>
                <div>
                  <img
                    src={`/images/stack/${tech.image}`}
                    className="tech-img"
                  />
                </div>
                <div className="tech-body">
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <style jsx>{`
        .stacks {
          padding: 80px 0;
        }

        .stack-list {
          display: grid;
          grid-gap: 21px;
          grid-template-columns: 1fr 1fr;
        }

        .tech {
          display: flex;
        }

        .tech-img {
          background-color: #393d50;
          border: 3px solid #192035;
          border-radius: 32px;
          width: 120px;
        }

        h4 {
          margin: 0;
        }
      `}</style>
    </>
  );
}
