const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function stringToMonth(inputDate: string) {
  if (!inputDate) return '';

  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[month]}, ${year}`;
}

const dateToString = (inputDate: string) => {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month <= 9 ? '0' + month : month}-${day}`;
}

const dateFormatter = { stringToMonth, dateToString }

export default dateFormatter