import Day from "./Day";

const Week = (props) => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  const angle = props.weekNumber * props.angle;
  return (
    <div
      className="Week abs"
      id={props.id}
      style={{ transform: `rotate(${angle + 180}deg)` }}
    >
      {days.map((day) => (
        <Day
          id={`${props.id}day${day}`}
          index={day}
          key={`${props.id}day${day}`}
          weekNumber={props.weekNumber}
          angle={angle}
          janFirstOffset={props.janFirstOffset}
          firstDayOfYear={props.firstDayOfYear}
        />
      ))}
      <div
        className="week-number"
        style={{ transform: `rotate(-${angle + 180}deg)` }}
      >
        {props.weekNumber}
      </div>
    </div>
  );
};

export default Week;
