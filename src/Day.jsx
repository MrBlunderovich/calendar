const Day = (props) => {
  const firstDayOfYear = new Date(props.firstDayOfYear);
  const dayOfYearNumber =
    (props.weekNumber - 1) * 7 + props.index - props.janFirstOffset + 1;
  //console.log({ dayOfYearNumber });
  const thisDateMil = firstDayOfYear.setDate(
    firstDayOfYear.getDate() + dayOfYearNumber - 1
  );
  //console.log({ thisDateMill });
  const thisDate = new Date(thisDateMil);
  //console.log(thisDate);
  const thisDay = thisDate.getDate();
  const thisMonth = thisDate.getMonth() + 1;

  const months = [
    { number: 1, name: "Январь", color: "" },
    { number: 2, name: "Февраль", color: "" },
    { number: 3, name: "Март", color: "" },
    { number: 4, name: "Апрель", color: "" },
    { number: 5, name: "Май", color: "" },
    { number: 6, name: "Июнь", color: "" },
    { number: 7, name: "Июль", color: "" },
    { number: 8, name: "Август", color: "" },
    { number: 9, name: "Сентябрь", color: "" },
    { number: 10, name: "Октябрь", color: "" },
    { number: 11, name: "Ноябрь", color: "" },
    { number: 12, name: "Декабрь", color: "" },
  ];
  //console.log(thisDay);

  function getDayOfWeek(weekNumber, dayOfWeek) {
    const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    /* const thisDate = props.firstDayOfYear.setDate(
      props.firstDayOfYear.getDate() + dayOfYearNumber - 1
    ); */
    if (weekNumber === 0) {
      return dayNames[dayOfWeek - 1];
    } else {
      if (dayOfYearNumber > 0) {
        return thisDay;
      } else {
        return null;
      }
    }
  }
  return (
    <div
      className={`Day flex-center day${props.index}`}
      id={props.id}
      data-week={props.weekNumber}
      style={{
        transform: `rotate(-${props.angle + 180}deg)`,
        backgroundColor: `hsl(${thisMonth * 30 + 210},50%,50%)`,
      }}
    >
      {getDayOfWeek(props.weekNumber, props.index)}
    </div>
  );
};

export default Day;
