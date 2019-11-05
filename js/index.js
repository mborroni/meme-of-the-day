import { getMemes, ENDPOINT } from './api.js';
import {
  dataRestructuring,
  bySize,
  byAscendingId,
  getToday,
  getRandomIndex
} from './utils.js';

let memesArray = [];

const img = document.querySelector('.meme');
const title = document.querySelector('.title');
const btn = document.querySelector('.btn-get-random-meme');

btn.addEventListener('click', displayRandomMeme);

function displayMemeOfTheDay() {
  const memeOfTheDay = getMemeOfTheDay();
  img.src = memeOfTheDay.url;
  img.alt = memeOfTheDay.name;
}

function displayRandomMeme() {
  const randomMeme = getRandomMeme();
  title.textContent = 'Random Meme';
  img.src = randomMeme.url;
  img.alt = randomMeme.name;
  btn.textContent = 'Get another random Meme!';
}

function getMemeOfTheDay(memes) {
  const today = getToday();
  return memesArray[today - 1];
}

function getRandomMeme() {
  const randomIndex = getRandomIndex(memesArray.length);
  return memesArray[randomIndex];
}

getMemes(ENDPOINT)
  .then(memes =>
    memes
      .map(dataRestructuring)
      .filter(bySize)
      .sort(byAscendingId)
  )
  .then(memes => {
    console.dir(memes);
    memesArray = memes;
    displayMemeOfTheDay();
  })
  .catch(error => console.log(error.message));
