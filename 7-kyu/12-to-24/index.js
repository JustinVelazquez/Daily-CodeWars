// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"

  if (period === 'am' && hour === 12) {
    hour = 0;
  } else if (period === 'pm' && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
}
