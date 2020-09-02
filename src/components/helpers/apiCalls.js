export const getAllSongs = () => {
  return fetch('http://localhost:8080/api/v1/playlist')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Sorry, there was an issue getting all the songs")
      }
    })
}

export const postNewSong = (newSong) => {
  return fetch('http://localhost:8080/api/v1/playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newSong),
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Sorry, there was an issue adding your song to the queue")
      }
    })
}
