import React, {FC, useEffect} from 'react'

const MiniPlayer: FC = () => {

  let audio: HTMLAudioElement;


  useEffect(() => {
    const mockData = [{
      name: 'Track1',
      artist: 'Artist1',
      audiofile: '../assets/mocks/audio/firstAudio.mp3'
    }]

    console.log(mockData[0].audiofile)
    if (!audio) {
      audio = new Audio();
      audio.src = mockData[0].audiofile
    }
  }, [])


  const playTrack: () => void = () => {
    audio.play();
  }

  return (
    <div className='mini-player'>
      <div>
        <button onClick={playTrack}>PLAY</button>
      </div>
    </div>
  )
}

export default MiniPlayer