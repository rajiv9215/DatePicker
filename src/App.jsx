import React, { useState, useEffect, useContext } from "react";
import { GetMonth, GetWeek } from "../util";
import Month from "./components/Month";
import CalendarHeader from "./components/CalendarHeader";
import GlobalContext from "./context/GlobalContext";
import Week from "./components/Week";
import RecurrenceOption from "./components/RecurrenceOption";
import Daily from "./components/Daily";


function App() {
  const [currenMonth, setCurrentMonth] = useState(GetMonth());
  const [currentWeek, setCurrentWeek] = useState(GetWeek());
  const { monthIndex } = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useState("month");

  useEffect(() => {
    setCurrentMonth(GetMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          {selectedOption === "month" && <Month month={currenMonth} />}
        {selectedOption === "week" && <Week week={currentWeek} />}
          {selectedOption === "day" && <Daily />}
        </div>
      </div>
      <RecurrenceOption
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default App;
