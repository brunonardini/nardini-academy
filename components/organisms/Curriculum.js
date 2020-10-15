import React from "react";
import { IconContext } from "react-icons";
import { FaReact, FaJedi, FaCubes, FaCogs } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { IoIosRocket } from "react-icons/io";
import { SiReactrouter, SiRedux } from "react-icons/si";

import { useTheme } from "../../styles/Theme";
import Container from "../atoms/Container";
import SectionTopic from "../atoms/SectionTopic";

const curriculum = [
  {
    title: "Introdução e Conceitos básicos",
    icon: <FaReact />,
    body: (
      <p>
        Nesta primeira parte do curso irá apresentar o React na sua forma mais
        simples. Iremos usar um único arquivo HTML e vamos construir uma
        calculadora explorando todos os conceitos básicos.
      </p>
    ),
  },
  {
    title: "Fundamentos",
    icon: <RiCodeSSlashLine />,
    body: (
      <p>
        Começamos a criar um projeto profissional do ínicio. Você vai me
        acompanhar em cada decisão do projeto, desde as pequenas até as grandes.
        Cada passo do desenvolvimento foi pensado e projetado para lhe passar o
        máximo de conhecimento, para que você possa tomar suas próprias decisões
        quando estiver em um projeto por conta própria, ou até mesmo em uma
        entrevista de emprego.
      </p>
    ),
  },
  {
    title: "Fundatamentos II",
    icon: <FaJedi />,
    body: (
      <p>
        Avançamos na parte fundamental do React para construir uma base bem
        sólida.
      </p>
    ),
  },
  {
    title: "Deployment",
    icon: <IoIosRocket />,
    body: (
      <p>
        Um dos desafios de um projeto profissional é colocar o projeto no ar da
        melhor forma possível. Passaremos por todas as melhores práticas e no
        final você terá seu projeto no ar pronto para ser usado e compartilhado.
      </p>
    ),
  },
  {
    title: "Entrega Contínua",
    icon: <FaCubes />,
    body: (
      <p>
        <em>Entregar frequentemente software funcionando</em> é um dos
        princípios do{" "}
        <a
          href="https://agilemanifesto.org/iso/ptbr/principles.html"
          target="_blank"
          rel="nofollow"
          rel="noreferrer"
        >
          Manifesto Ágil
        </a>
        , para isso é necessário construir um processo solido e confiável.
      </p>
    ),
  },
  {
    title: "Integração Contínua",
    icon: <FaCogs />,
    body: (
      <p>
        Seguindo com a Entrega Contínua, iremos implementar um conjunto de
        automatizações que dará segurança para o nosso processo.
      </p>
    ),
  },
  {
    title: "Rotas",
    icon: <SiReactrouter />,
    body: <p>Avançando com o projeto, passamos a construir outras telas.</p>,
  },
  {
    title: "React com Redux",
    icon: <SiRedux />,
    body: (
      <p>
        Vamos criar um novo projeto? Que tal um jogo? Então é isso que vamos
        fazer! Criaremos um jogo de memória para explorar os recursos do Redux
        junto ao React, além de outras ferramentas novas.
      </p>
    ),
  },
];

export default function Curriculum() {
  const theme = useTheme();

  return (
    <>
      <IconContext.Provider
        value={{
          color: theme.colors.primary.main,
          size: 62,
        }}
      >
        <div className="curriculum">
          <Container>
            <SectionTopic>Conteúdo programático</SectionTopic>

            <div>
              {curriculum.map((section, index) => (
                <div className="section" key={`section-${index}`}>
                  <div>{section.icon}</div>
                  <div className="section-body">
                    <h4 className="section-title">{section.title}</h4>
                    {section.body}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </IconContext.Provider>
      <style jsx>{`
        .curriculum {
          padding: 80px 0;
        }

        .section {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .section-body {
          padding-left: 21px;
        }

        .section-title {
          margin: 0;
          font-size: 36px;
          color: #fff;
        }
      `}</style>
    </>
  );
}
