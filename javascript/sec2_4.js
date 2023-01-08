function getFormattedDateString() {
    const date = new Date();
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    return `Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`;
  }
  console.log(getFormattedDateString());