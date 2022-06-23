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
          Lampe 1
        </li>
        <li
          onClick={() => {
            setStep(2);
          }}
        >
          Lampe 2
        </li>
        <li
          onClick={() => {
            setStep(3);
          }}
        >
          Lampe 3
        </li>
      </ul>
    </div>
  );
}

export default Control;
