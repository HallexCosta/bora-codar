import Sofa from '@assets/images/sofa.png'
import SofaAnimated from '@assets/images/sofa.gif'
import { ButtonChangeImageToGif } from './components/Buttons/buttonChangeImageToGif'

import './styles.css'

export function Home() {
  return (
    <main className="container">
      <section className="img-content">
        <ButtonChangeImageToGif
          images={{
            static: Sofa,
            gif: SofaAnimated
          }}
          alt="Sofá"
        />

      </section>

      <section className="product-content">
        <div className="product-info">
          <p className="id">CÓDIGO: 42404</p>
          <h2>Sofá Margot II - Rosé</h2>
          <p className="price">R$ 4.000</p>
        </div>
        <button>ADICIONAR À CESTA</button>
      </section>
    </main>
  )
}
