import "./tickertape.css";

export const TickerTape = () => {
  const string = " sofia · junior web developer ·";

  return (
    <div
      className="ticker-tape"
      aria-hidden>
      <span className="ticker">
        <span>{string}</span>
        <span>{string}</span>
        <span>{string}</span>
      </span>
      <span className="ticker">
        <span>{string}</span>
        <span>{string}</span>
        <span>{string}</span>
      </span>
      <span className="ticker">
        <span>{string}</span>
        <span>{string}</span>
        <span>{string}</span>
      </span>
    </div>
  );
};
