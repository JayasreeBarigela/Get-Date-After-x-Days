const addDays = require("date-fns/addDays");
function getAfterXDays(num) {
  const newDate = addDays(new Date(2020, 7, 22), num);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}

module.exports = getAfterXDays;
