import { isSameWeek } from "date-fns";

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

  function getDayColor(offset = 0) {
    if (props.weekNumber === 0) {
      return "hsl(53.37 87.96% 42.35%)";
    }
    return `hsl(${-thisMonth * 30 + thisDay * 0.7 + 230 + offset},50%,50%)`;
    //return `hsl(${thisMonth * -30 + 230},50%,50%)`;
  }
  /* function thisMonthInverted(){

  } */

  /* const months = [
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
  ]; */
  /* const monthColors = [
    '#4080bf',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '#40bfbf',
  ] */
  //console.log(thisDay);
  function isCurrentWeek() {
    //if today is THE year and THE week
    //return classname corresponding to highlighting css
    /* if (isSameWeek(new Date(), thisDate, { weekStartsOn: 1 })) {
      console.log(thisDate);
      console.log("MATCH");
      return "current-week";
    } else {
      return "";
    } */
    if (isSameWeek(new Date(), thisDate, { weekStartsOn: 1 })) {
      return true;
    } else {
      return false;
    }

    //const today = new Date()
    //const todayWeekNumber =
  }

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
      className={`Day flex-center day${props.index} ${isCurrentWeek()}`}
      id={props.id}
      data-week={props.weekNumber}
      style={{
        transform: `rotate(-${props.angle + 180}deg)`,
        backgroundColor: getDayColor(),
        boxShadow: isCurrentWeek()
          ? `0 0 10px 3px ${getDayColor(-60)}`
          : "none",
      }}
    >
      {getDayOfWeek(props.weekNumber, props.index)}
    </div>
  );
};

export default Day;

//backgroundColor: `hsl(${thisMonth * -30 + 230},50%,50%)`,
