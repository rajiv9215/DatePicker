import React from "react";
import dayjs from "dayjs";

export default function Week({ week }) {
  const w = week[0];

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-1">
      {w.map((day, rowIdx) => (
       <div className="border border-gray-100 flex h-2/6 flex-col">
       <header className="flex flex-col items-center">
         {(
           <p className="text-sm mt-1">
             {day.format("ddd").toUpperCase()}
           </p>
         )}
         <p
           className={`text-sm p-1 my-1 text-center ${day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-600 text-white rounded-full w-7"
            : ""}`}
         >
           {day.format("DD")}
         </p>
       </header>
       </div>
      ))}
    </div>
  );
}
