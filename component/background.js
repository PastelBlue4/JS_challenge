const backGround = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg",];

const setBackgroundImage = document.querySelector("#bg img");

const setImage = backGround[Math.floor(Math.random() * backGround.length)];

setBackgroundImage.src = `image/${setImage}`;

