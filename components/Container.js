import React from "react";

const Container = ({ children }) => (
  <>
    <div className="container">{children}</div>

    <style jsx>{`
      .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 21px;
        padding-right: 21px;
      }

      @media (min-width: 1212px) {
        .container {
          width: 1212px;
        }
      }
    `}</style>
  </>
);

export default Container;
