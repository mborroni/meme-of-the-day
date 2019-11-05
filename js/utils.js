export function dataRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

export function bySize(meme) {
  return meme.width >= 500 || meme.height >= 500;
}

export function byAscendingId(memeOne, memeTwo) {
  return parseInt(memeOne.id) - parseInt(memeTwo.id);
}

export function getToday() {
  const today = new Date();
  return today.getDate();
}

export function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}
