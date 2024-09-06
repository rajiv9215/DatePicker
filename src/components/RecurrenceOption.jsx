import React, { useState } from "react";
import Button from "./Button";

function RecurrenceOption({ selectedOption, setSelectedOption }) {
  return (
    <div className="sticky bottom-20 rounded-3xl text-center p-1 text-white bg-zinc-600 inline-block left-2/4 -translate-x-1/2 px-1">
      <Button value="month" setSelectedOption={setSelectedOption} />
      <Button value="week" setSelectedOption={setSelectedOption} />
      <Button value="day" setSelectedOption={setSelectedOption} />
    </div>
  );
}

export default RecurrenceOption;
