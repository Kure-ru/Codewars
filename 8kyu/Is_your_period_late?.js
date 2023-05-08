// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.


function periodIsLate(last, today, cycleLength) {
  //calculate number of day passed from last to today
  let diffDay = (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24);
  // if greater than cycleLengh, return true
  return diffDay > cycleLength;
}
