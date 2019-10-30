import { getMemes, ENDPOINT } from "./api.js";

function dataRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

function bySize(meme) {
  return meme.width >= 500 || meme.height >= 500;
}

function byAscendingId(memeOne, memeTwo) {
  return parseInt(memeOne.id) - parseInt(memeTwo.id);
}

getMemes(ENDPOINT)
  .then(memes =>
    memes
      .map(dataRestructuring)
      .filter(bySize)
      .sort(byAscendingId)
  )
  .then(memes => console.dir(memes))
  .catch(error => console.log(error.message));
