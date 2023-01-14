import { MusicPlayer } from "@components/MusicPlayer";

import './styles.css'

export function Home() {
  return (
    <div className="container">
      <MusicPlayer 
        className="player1"
        playerId={1}
      />
      <MusicPlayer
        /*className="player2 horizontal"*/
        playerId={2}
        orientation="horizontal"
      />
      <MusicPlayer
        /*className="player3 horizontal"*/
        playerId={3}
        orientation="horizontal"
        showProgessBar={false}
      />
    </div>
  )
}
