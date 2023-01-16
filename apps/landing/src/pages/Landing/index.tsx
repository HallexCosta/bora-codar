import { Link } from 'react-router-dom'

import './styles.css'

import Challenger1Image from '@landing/assets/images/challenger-1.png'
import Challenger2Image from '@landing/assets/images/challenger-2.png'

export function Landing() {
  return (
    <main className="landing-container">
      <section className="challenger-1">
        <Link to="/desafio/1" className="scale">
          <img src={Challenger1Image} alt="Desafio 1 Image" />
          <h2>Desafio 1</h2>
        </Link>
      </section>

      <section className="challenger-2">
        <Link to="/desafio/2" className="scale">
          <img src={Challenger2Image} alt="Desafio 2 Image" />
          <h2>Desafio 2</h2>
        </Link>
      </section>
    </main>
  )
}
