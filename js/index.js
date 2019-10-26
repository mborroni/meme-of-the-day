import { getMemes } from "./api.js";

function restructureData(memes) {
  return memes.map(meme => {
    const { id, name, width, height, url } = meme;
    return { id, name, width, height, url };
  });
}

function filterBySize(memes) {
  return memes.filter(meme => meme.width >= 500 || meme.height >= 500);
}

function orderByAscendingId(memes) {
  return memes.sort(
    (memeOne, memeTwo) => parseInt(memeOne.id) - parseInt(memeTwo.id)
  );
}

getMemes()
  .then(restructureData)
  .then(filterBySize)
  .then(orderByAscendingId)
  .then(memes => console.dir(memes))
  .catch(error => console.log(error.message));
