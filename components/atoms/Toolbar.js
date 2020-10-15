import React from "react";

export default function Toolbar({ children }) {
  return (
    <>
      <div className="toolbar">{children}</div>
      <style jsx>{`
        .toolbar > :global(button),
        .toolbar > :global(a) {
          margin: 0 16px 16px 0;
        }
      `}</style>
    </>
  );
}
