import { getMemes, ENDPOINT } from "./api.js";
import { dataRestructuring, bySize, byAscendingId, getToday, getRandomIndex } from "./utils.js";

function getMemeOfTheDay(memes) {
  today = getToday();
  return memes[today - 1];
}

function getRandomMeme(memes) {
  const randomIndex = getRandomIndex();
  const randomMeme = memes[randomIndex];
  return randomMeme;
}

getMemes(ENDPOINT)
  .then(memes =>
    memes
      .map(dataRestructuring)
      .filter(bySize)
      .sort(byAscendingId)
  )
  .then(memes => console.dir(memes))
  .then(memes => {
    const memeOfTheDay = getMemeOfTheDay(memes);
  })
  .catch(error => console.log(error.message));
