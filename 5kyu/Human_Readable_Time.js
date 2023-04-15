// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//prep
//parameters : non-negative integer
//return  string 'HH:MM:SS'
//examples
// 0 → '00:00:00'
// 59 → '00:00:59'
// 90 → '00:01:30'

function humanReadable(seconds) {
  //1 minute = 60 secs
  // 1 hour = 60 min || 3600 secs
  // find hours by dividing by 3600
  let hours = seconds / 3600;
  hours = Math.floor(hours).toString().padStart(2, "0");
  let remainder = seconds % 3600;
  // find minutes by using remainder and dividing it by 60
  let minutes = remainder / 60;
  minutes = Math.floor(minutes).toString().padStart(2, "0");
  // find seconds with modulo operation
  seconds = remainder % 60;
  seconds = seconds.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
