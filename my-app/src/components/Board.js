import React from 'react'

import { Square } from './Square'

export function Board() {
  const NUMBER_OF_BOXES = 9
  const boxes = Array(NUMBER_OF_BOXES).fill(null)

  return (
    <div className='boardContainer'>
      {boxes.map((box, idx) => <Square value={box} />)}
    </div>
  )
}
