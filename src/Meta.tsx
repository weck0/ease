import "./Meta.scss";

function Meta(props: { step: number }) {
  const { step } = props;

  const metas: Record<
    number,
    {
      material: string;
      dimensions: string;
      weight: string;
      electrification: string;
    }
  > = {
    1: {
      material: "copper",
      dimensions: "H 33 x W 15 x 0 15",
      weight: "2.5kg",
      electrification: "LED 10W | 09 | 220-240V | 50 Hz",
    },
    2: {
      material: "iron",
      dimensions: "H 104 x W 132 x D 125",
      weight: "12.5kg",
      electrification: "LED 12W | G9 | 220-240V | 50 Hz",
    },
    3: {
      material: "iron",
      dimensions: "H 104 x W 132 x D 125",
      weight: "12.5kg",
      electrification: "LED 12W | G9 | 220-240V | 50 Hz",
    },
  };
  return (
    <div className="Meta">
      <ul>
        <li>
          <strong>Material</strong>
          {metas[step].material}
        </li>
        <li>
          <strong>Dimension</strong>
          {metas[step].dimensions}
        </li>
        <li>
          <strong>Net Weight</strong>
          {metas[step].weight}
        </li>
        <li>
          <strong>Electtrification</strong>
          {metas[step].electrification}
        </li>
      </ul>

      <img src={`img/lamp${step}.png`} />
    </div>
  );
}

export default Meta;
