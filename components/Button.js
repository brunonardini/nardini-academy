import React from "react";
import clsx from "clsx";

import { useTheme } from "../styles/Theme";

export default function Button({ children, color, variant, ...rest }) {
  const theme = useTheme();

  return (
    <>
      <button type="button" className={clsx("btn", variant, color)} {...rest}>
        {children}
      </button>

      <style jsx>{`
        .btn {
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 50px;
          padding: 0 25px;
          white-space: nowrap;
          background-color: ${theme.colors.foreground};
          border: 2px solid ${theme.colors.foreground};
          border-radius: 36px;
          cursor: pointer;
          color: #212121;
        }

        .primary {
          background-color: ${theme.colors.primary.main};
          border-color: ${theme.colors.primary.main};
        }

        .secondary {
          background-color: ${theme.colors.secondary.main};
          border-color: ${theme.colors.secondary.main};
        }

        .outlined {
          background-color: transparent;
          color: ${theme.colors.foreground};
        }

        .outlined.primary {
          color: ${theme.colors.primary.main};
        }

        .outlined.secondary {
          color: ${theme.colors.secondary.main};
        }

        .btn:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
