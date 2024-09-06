import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";



export default function CalendarHeader() {
const { monthIndex, setMonthIndex} = useContext(GlobalContext);


  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 flex-1 gap-4 fond-bold">
       <SlCalender/>
       DatePicker
      </h1>
      <h2 className="ml-4 text-xl px-10 text-gray-500 font-bold">
        { dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button
       onClick={handlePrevMonth}
       >
        <span className="cursor-pointer px-8 text-gray-600 mx-6">
          <SlArrowLeft/>
        </span>
      </button>
      <button 
      onClick={handleNextMonth}
      >
        <span className="cursor-pointer text-gray-600 mx-6">
          <SlArrowRight/>
        </span>
      </button>
      
    </header>
  );
}