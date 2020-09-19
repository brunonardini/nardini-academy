import React from "react";

import { useTheme } from "../styles/Theme";
import Container from "./Container";

export default function Summary() {
  const theme = useTheme();

  return (
    <>
      <div id="summary" className="summary">
        <Container>
          <p>
            <strong>Vamos ser sinceros?</strong> Nenhum curso vai te transformar
            em um super herói, em um ninja e nem vai te transformar em um(a)
            profissional sênior, full stack ou de sucesso. Vamos pular essas
            falsas promessas. Antes de ser professor, eu sou aluno, então vou
            lhe dizer o que realmente me leva a comprar um curso.
          </p>
          <p>
            Quando eu não sei algum conceito ou não conheço uma tecnologia, eu
            procuro um profissional experiênte no assunto para absorver esse
            conhecimento. Hoje em dia qualquer documentação já fornece de graça
            um tutorial com o passo a passo, então aprender como usar uma
            linguagem, biblioteca ou framework dá para fazer sozinho sem custo,
            mas a experiência de quem já aplicou em projetos reais e
            profissionais você só consegue adquirir de alguém que já viveu isso.
          </p>
          <p>
            Então é isso que se trata o curso{" "}
            <strong>React Profissional</strong>, eu desenvolvo alguns projetos e
            vou explicando cada conceito e mostro todo meu processo de decisão.
            Começo com um projeto bem simples para demonstrar os conceitos
            básicos, depois passo para um{" "}
            <strong>projeto realmente profissional</strong>, com tudo que é
            necessário e importante, do mesmo jeito que eu faço nas empresas que
            me contratam como um especialista no assunto.
          </p>
        </Container>
      </div>

      <style jsx>{`
        .summary {
          padding: 40px 0;
        }

        .primary {
          color: #8be9fd;
        }
      `}</style>
    </>
  );
}
