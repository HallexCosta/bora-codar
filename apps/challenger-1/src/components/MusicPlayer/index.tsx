import { AllHTMLAttributes, HTMLFactory } from 'react'
import { FastForward, Play } from 'react-feather'

import './styles.css'

// declare interface Props {
//   orientation?: 'horizontal' | 'vertical'
//   showProgessBar?: boolean
// }

type Props = AllHTMLAttributes<HTMLDivElement> & {
  playerId: number
  orientation?: 'horizontal' | 'vertical'
  showProgessBar?: boolean
}

export function MusicPlayer(props: Props) {
  const musicPlayerId = props.playerId ? `player${props.playerId}` : ''
  const orientation = props?.orientation ?? 'vertical'
  const showProgessBar = props?.showProgessBar ?? true

  const ProgessBar = () => (
    <div className="progress">
      <div className="bar">
        <div className="move" />
      </div>

      <p className="duration">
        <span>03:20</span>
        <span>00:12</span>
      </p>
    </div>
  )

  return (
    <section className={`music-player ${musicPlayerId} ${orientation}`}>
      <div className="content">
        <img src="https://user-images.githubusercontent.com/55293671/212416207-2171fa5c-d30f-42dc-bb7e-e0a8d450203c.png" />

        <div className="description">
          <h2>Acorda Devinho</h2>
          <p>Banda Rocketseat</p>
        </div>
      </div>

      <div className="controls">
        <FastForward className="fast-back-icon" />
        <Play />
        <FastForward />
      </div>

      {showProgessBar ? <ProgessBar /> : null}
    </section>
  )
}
