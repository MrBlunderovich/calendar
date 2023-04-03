import Week from "./Week";
import React from "react";

const App = () => {
  //const [dayDiameters, setDayDiameters] = React.useState([])
  //const weekNumber = 1;
  const nowYear = new Date(2023, 1, 1).getFullYear();
  const yearStart = new Date(nowYear, 0, 1);
  const janFirstOffset = yearStart.getDay();
  //console.log({ janFirstOffset });
  const firstDayOfYear = new Date(nowYear, 0, 1);
  /* console.log({ firstDayOfYear });
  console.log({ getdate: firstDayOfYear.getDate() });
  const someDay = firstDayOfYear.setDate(firstDayOfYear.getDate() + 350);
  console.log({ someDay });
  const someMoreDay = new Date(someDay);
  console.log({ someMoreDay });
  console.log({ finally: someMoreDay.getDate() }); */

  /* function daysIntoYear(date) {
    return (
      (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000
    );
  } */

  //console.log({ nowDate });
  //console.log({ getDate: nowDate.getDate() });
  const weeksArray = [];
  const weeksCount = 53;
  const angle = 360 / weeksCount;
  for (let i = 0; i < weeksCount; i++) {
    weeksArray.push(i);
  }
  //console.log(weeksArray);
  return (
    <div className="App flex-center">
      <div className="center-point" id="center-point">
        <div className="abs">{nowYear}</div>
        <div className="center-circle abs" id="center-circle"></div>
        {weeksArray.map((week) => (
          <Week
            id={`week${week}`}
            weekNumber={week}
            key={`week${week}`}
            angle={angle}
            janFirstOffset={janFirstOffset}
            firstDayOfYear={firstDayOfYear}
          />
        ))}
        {/* <Week id={`week${weekNumber}`} weekNumber={weekNumber} /> */}
      </div>
    </div>
  );
};

export default App;
