import { useEffect } from 'react';

// Set Spotify credentials
const clientId = "ad6cf4c002d543ee9bb2d39655eab21e";
const clientSecret = "27daa666a9e148898ce478eabf280877";

const playSongSnippet = async (track: string) => {
  try {
    const token = await getToken();

    const searchResult = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(track)}&type=track&limit=15`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const searchData = await searchResult.json();

    const firstTrack = searchData.tracks.items.find((item: any) => item.preview_url);

    if (firstTrack) {
      const previewUrl = firstTrack.preview_url;

      const audio = new Audio(previewUrl);
      audio.play();

      console.log(`Now playing: ${firstTrack.name}`);
    } else {
      console.log("No track found.");
    }
  } catch (error) {
    console.error("Error playing the song:", error);
  }
};

const getToken = async () => {
  const result = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  console.log(data.access_token);
  return data.access_token;
};

const clickedEvent = async (imgIndex: number, itemIndex: number, track: string) => {
  let token = await getToken();

  let headers = new Headers([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
    ['Authorization', `Bearer ${token}`]
  ]);

  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
    method: 'GET',
    headers: headers
  });

  let result = await fetch(request);
  let response = await result.json();
  console.log(response);

  let song = response.tracks.items[itemIndex]?.preview_url;

  while (song == null) {
    itemIndex += 1;
    song = response.tracks.items[itemIndex]?.preview_url;
  }

  if (song) {
    await playSongSnippet(song);
  } else {
    console.log("No song found.");
  }
};

const PlaySong: React.FC = () => {
    useEffect(() => {
      clickedEvent(0, 0, "Cellar Smeller");
    }, []);
  
    return null; // Replace with your component JSX
  };
  

export { getToken, clickedEvent, PlaySong, playSongSnippet };
