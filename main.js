//formate date
const date = new Date();

const day = date.getDate();
const month = date.toLocaleString('default', { month: 'short' }); 
const year = date.getFullYear();

// Format the date as "Date-Month-Year"
const formattedDate = `${day}-${month}-${year}`;

const datePlace = document.querySelector(".date_place")
datePlace.innerHTML= formattedDate