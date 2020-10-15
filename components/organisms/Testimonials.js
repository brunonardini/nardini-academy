import React from "react";

import { useTheme } from "../../styles/Theme";

import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const items = [
  {
    name: "Fernando Skate",
    text:
      "Estou gostando bastante do curso, é tudo o que eu preciso para aprender React. Aqui neste curso estou adquirindo o conhecimento passo a passo nos mínimos detalhes. Obrigado ao professor!",
  },
  {
    name: "Dário Teodoro",
    text:
      "Ótimo conteúdo, Vejo uma grande preocupação em mate-lo sempre atualizado, com inclusão de novos módulos. O Instrutor é muito atencioso no esclarecimento de dúvidas.",
  },
  {
    name: "Julio Cezar Dourado",
    text:
      "Professor conhece demais! Explica detalhadamente cada passo, valeu cada centavo do investimento.",
  },
  {
    name: "Fabiana Barreto Pereira",
    text:
      "Muito Bom! Instrutor passa o conteúdo de forma bem simples e fácil entendimento.",
  },
  {
    name: "Kaio Felipe Silva",
    text:
      'Antes desse curso já tinha tido contato com React, porém quando pegava um "projeto da vida real" sofria muito pra entender o que tava acontecendo. Depois de iniciar (e ainda não terminei) já finalizei dois projetos e vejo que o curso teve um papel crucial nisso (visto que eu já tinha feito outros anteriormente). Recomendo demais! Daria 6 estrelas, se possível hahah!',
  },
  {
    name: "Wilson Aparecido da Silva Pereira",
    text:
      "O Curso foi muito produtivo no meu aprendizado e consegui alinhar boas praticas no meu desenvolvimento - Valeu por ter dedicado com certezas dias de trabalho para promover esse trabalho que vai ajudar muita gente a crescer profissionalmente.",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <>
      <div className="root">
        <Container>
          <SectionTopic>Depoimentos dos alunos</SectionTopic>

          <div className="testimonials">
            {items.map((item, index) => (
              <div key={index} className="blockquote">
                <p className="blockquote-text">
                  <em>"{item.text}"</em>
                </p>
                <p className="student">&mdash; {item.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <style jsx>{`
        .root {
          padding: 80px 0;
        }

        .testimonials {
          display: grid;
          grid-column-gap: 16px;
          grid-row-gap: 16px;
          grid-template-columns: 1fr;
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 767px) {
          .testimonials {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .testimonial {
          position: relative;
          border: 2px solid ${theme.colors.divider};
          border-radius: 4px;
          padding: 12px 32px;
        }

        .blockquote {
          position: relative;
          max-width: 620px;
          margin: 80px auto;
          align-self: center;
        }

        .blockquote-text {
          position: relative;
          margin: 0;
          border: 2px solid ${theme.colors.divider};
          border-radius: 20px;
          padding: 25px;
        }

        .blockquote-text:after {
          content: "";
          position: absolute;
          border: 2px solid ${theme.colors.divider};
          border-radius: 0 50px 0 0;
          width: 60px;
          height: 60px;
          bottom: -60px;
          left: 50px;
          border-bottom: none;
          border-left: none;
          z-index: 3;
        }

        .blockquote-text:before {
          content: "";
          position: absolute;
          width: 80px;
          border: 6px solid ${theme.colors.background};
          bottom: -3px;
          left: 50px;
          z-index: 2;
        }

        .student {
          padding-left: 140px;
        }
      `}</style>
    </>
  );
}
