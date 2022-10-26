const names = ["Jessica", "Austin", "Brooke", "Tyler", "Janae", "Josh"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => `${names[getRandomNumber(names.length)]}`;

// console.log(getRandomName());

const setRandomName = () => {
  document.getElementById("random-name").innerText = getRandomName();
};

document.getElementById("generate").addEventListener("click", setRandomName);

setRandomName();

// const getRandomName = () => {
//   `${names[Math.floor(Math.random() * (names.length)]}`;
// };

// console.log(getRandomName());
