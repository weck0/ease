import "./Control.scss";

function Control(props: { step: number; setStep: React.Dispatch<number> }) {
  const { step, setStep } = props;

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
        <span>
          <img src="img/day.svg"></img>
        </span>
        <span>
          <img src="img/night.svg"></img>
        </span>
      </div>
    </div>
  );
}

export default Control;
