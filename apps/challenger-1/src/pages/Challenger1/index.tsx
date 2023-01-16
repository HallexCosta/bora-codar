import { MusicPlayer } from '@challenger-1/components/MusicPlayer'

import './styles.css'

export function Challenger1() {
  return (
    <div className="challenger-1-container">
      <MusicPlayer className="player1" playerId={1} />
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
