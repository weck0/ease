import "./Control.scss";

function Control(props: {
  step: number;
  setStep: React.Dispatch<number>;
  darkmode: boolean;
  setDarkMode: React.Dispatch<boolean>;
}) {
  const { step, setStep } = props;
  const { darkmode, setDarkMode } = props;

  return (
    <div className="Control">
      <ul>
        <li
          onClick={() => {
            setStep(1);
          }}
        >
          <img src={`img/lamp1.png`} alt="lampe 1" />
        </li>
        <li
          onClick={() => {
            setStep(2);
          }}
        >
          <img src={`img/lamp2.png`} alt="lampe 2" />
        </li>
        <li
          onClick={() => {
            setStep(3);
          }}
        >
          <img src={`img/lamp3.png`} alt="lampe 3" />
        </li>
      </ul>
      <div className="day-night">
        <span
          onClick={() => {
            setDarkMode(false);
          }}
          className={`${darkmode === false ? `active` : ``}`}
        >
          <img src="img/day.svg"></img>
        </span>
        <span
          onClick={() => {
            setDarkMode(true);
          }}
          className={`${darkmode && `active`}`}
        >
          <img src="img/night.svg"></img>
        </span>
      </div>
    </div>
  );
}

export default Control;
