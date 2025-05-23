import dayjs from 'dayjs';

export const formatDate = (date) => dayjs(date).format('YYYY-MM-DD');
export const isToday = (date) => dayjs(date).isSame(dayjs(), 'day');
export const getMonthDays = (month) => {
  const start = dayjs(month).startOf('month').startOf('week');
  const end = dayjs(month).endOf('month').endOf('week');
  
  const days = [];
  let day = start;
  
  while (day <= end) {
    days.push(day);
    day = day.add(1, 'day');
  }
  
  return days;
};