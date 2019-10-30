export const ENDPOINT = "https://api.imgflip.com/get_memes";

function checkStatusCode(response) {
  if (response.ok) {
    console.log("Successfull request!");
  } else {
    console.log(`Oops, we got an error ${response.status}`);
  }
  return response.json();
}

export function getMemes(URL) {
  return fetch(URL)
    .then(checkStatusCode)
    .then(json => json.data.memes)
    .catch(error => console.error(error.message));
}
