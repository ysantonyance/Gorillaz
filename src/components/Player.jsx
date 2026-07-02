import {useRef, useState} from 'react'
import '/src/components/styles/Player.css'

function Player({title, tracks}) {
    const audioRef = useRef(null)

  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = (song) => {
    const audio = audioRef.current;

    setCurrentSong(song);

    audio.src = tracks[song].src;
    audio.play();

    setIsPlaying(true);
  }

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
    } else {
        audio.play();
        setIsPlaying(true);
    }
  }

  const nextSong = () => {
    const next = (currentSong + 1) % tracks.length;
    playSong(next);
  }

  const prevSong = () => {
    const prev = (currentSong - 1 + tracks.length) % tracks.length;
    playSong(prev);
  }

  return (
    <>
      <div className="player-container">
          <audio ref={audioRef} />
          <h2>{title}</h2>

          <div className="player">
              <div className="player-info">
                  <p>{tracks[currentSong].name}</p>
              </div>
              <div className="buttons-section">
                  <button onClick={prevSong}>↜</button>
                  <button onClick={togglePlay}>
                      {isPlaying ? '❚❚' : '▶'}
                  </button>
                  <button onClick={nextSong}>↝</button>
              </div>
          </div>
      </div>

    </>
  )
}

export default Player
