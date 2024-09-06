import GlobalContext from "./GlobalContext";
import React, { useState ,useEffect} from "react";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
