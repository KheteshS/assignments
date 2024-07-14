function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time in HH:MM:SS
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Format the time in HH:MM:SS AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = (hours % 12) || 12;
  const timeStringAMPM = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

  console.log("HH:MM:SS:", timeString);
  console.log("HH:MM:SS AM/PM:", timeStringAMPM);
}

setInterval(getCurrentTime, 1000);