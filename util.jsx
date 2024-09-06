import dayjs from "dayjs";

export function GetMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
  
}

export function GetWeek(weekStart = dayjs().startOf('week')) {
  const weekMatrix = new Array(1).fill([]).map(() => {
    return new Array(7).fill(null).map((_, index) => {
      return dayjs(weekStart).add(index, 'day');
    });
  });
  return weekMatrix;
}
