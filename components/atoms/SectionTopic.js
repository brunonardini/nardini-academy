import React from "react";

import { useTheme } from "../../styles/Theme";

export default function SectionTopic({ children }) {
  const theme = useTheme();

  return (
    <>
      <h3 className="section-topic">{children}</h3>
      <style jsx>{`
        .section-topic {
          margin-bottom: 60px;
        }
      `}</style>
    </>
  );
}
