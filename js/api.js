const ENDPOINT = "https://api.imgflip.com/get_memes";

export function getMemes() {
  return fetch(ENDPOINT)
    .then(response => {
      if (response.ok) {
        console.log("Successfull request!");
        return response.json();
      }
      console.log(`Oops, we got an error ${response.status}`);
    })
    .then(json => json.data.memes)
    .catch(error => console.error(error.message));
}
