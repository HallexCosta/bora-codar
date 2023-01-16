import './styles.css'

import { ButtonChangeImageToGif } from '@challenger-2/components/ButtonChangeImageToGif'

import Sofa from '@challenger-2/assets/images/sofa.png'
import SofaAnimated from '@challenger-2/assets/images/sofa.gif'

export function Challenger2() {
  return (
    <main className="challenger-2-container">
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
