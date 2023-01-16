import { useState } from 'react'
import { X as XIcon } from 'react-feather'

import './styles.css'

import Rotation360Icon from '@challenger-2/assets/images/360-icon.svg'

interface Props {
  alt: string
  images: {
    static: string
    gif: string
  }
}

export const ButtonChangeImageToGif = (props: Props) => {
  const [isAnimated, setIsAnimated] = useState(false)

  function handleChangeImageToGif() {
    setIsAnimated(!isAnimated)
  }

  return (
    <>
      <img 
        src={isAnimated ? props.images.gif : props.images.static}
        alt="Sofá"
      />
      <button 
        onClick={handleChangeImageToGif}
        className="button-change-image-to-gif-container"
      >
        {isAnimated ? <XIcon /> : <img src={Rotation360Icon} />}
      </button>
    </>
  )
}
